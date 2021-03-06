import React, {Component} from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';

// state for MainComponent will come from REDUX STORE
// commenting out below data object imports, below imports moved to '../redux/reducer.js'
//
// import {DISHES} from '../shared/dishes';
// import {COMMENTS} from '../shared/comments';
// import {LEADERS} from '../shared/leaders';
// import {PROMOTIONS} from '../shared/promotions';

//using withRouter to connect react component to REDUX
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
//MainComponent needs to connect to REDUX STORE to obtain the state from there
import {connect} from 'react-redux';
//import Action Creators and REDUX THUNK
//fetch POST update: change addComment to postComment
//import {addComment, fetchComments, fetchDishes, fetchPromos} from '../redux/ActionCreators';
import {postComment, fetchComments, fetchDishes, fetchPromos, fetchLeaders, postFeedback} from '../redux/ActionCreators';
//import default actions provided by react-redux-form
import {actions} from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//state refers to the REDUX STORE state
//REDUX STORE state is mapped to props that would be used in this component
const mapStateToProps = state => {
    return {
        dishes : state.dishes,
        comments : state.comments,
        leaders : state.leaders,
        promotions : state.promotions
    }
}
//REDUX THUNK update
//state.dishes shape has changed,
//before - state.dishes = DISHES, after - state.dishes = {isLoading, errMes, dishes}

//function below receives dispatch as parameter when the Main component connect() to REDUX STORE
//REDUX STORE dispatch is mapped to props that would be used in this component
const mapDispatchToProps = dispatch => ({
    //'addComment' in dispatch(addComment(dishId, rating, author, comment)) makes a function call that returns action object
    //dispatch() gets action object, it becomes usable as "addComment" in component
    //fetch POST update: addComment replaced by postComment
    //addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => dispatch(actions.reset('feedback')),
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    fetchLeaders: () => { dispatch(fetchLeaders()) },
    postFeedback: (feedback) => dispatch(postFeedback(feedback))
});

//Making main component as container component
//Menu and DishDetail components would now act as presentational components
class Main extends Component{
    //commenting out constructor due to no immediate use
    // constructor(props){
    //     super(props);
    //     //bringing the states from Menu component here
    //     // this.state = {
    //     //     dishes : DISHES,
    //     //     comments : COMMENTS,
    //     //     promotions : PROMOTIONS,
    //     //     leaders : LEADERS
    //     // };
    //     //the state above isn't required since REDUX concepts are going to be implemented, commenting out the state
    // }

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render(){
        const HomePage = () => {
            //this.state changed to this.props after implementing REDUX
            return(
                <>
                    {/*<!--
                        after REDUX THUNK update dish={this.props.dishes.filter....} changed to
                        dishes={this.props.dishes.dishes.filter....}

                        added dishesLoading={this.props.dishes.isLoading} and dishesErrMes={this.props.dishes.errMes} attributes/properties to Home component
                    -->*/}
                    <Home
                        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                        dishesLoading={this.props.dishes.isLoading}
                        dishesErrMes={this.props.dishes.errMes}
                        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                        promosLoading={this.props.promotions.isLoading}
                        promosErrMes={this.props.promotions.errMes}
                        leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                        leadersLoading={this.props.leaders.isLoading}
                        leadersErrMes={this.props.leaders.errMes}
                    />
                    {/*<!--
                        fetch update: promotion = {this.props.promotions.filter....} -> {this.props.promotions.promotions.filter....},
                        due to change in shape of 'promotions' state

                        added promosLoading={this.props.promotions.isLoading} and promosErrMes={this.props.promotions.errMes}
                    -->*/}
                </>
            );
        }

        const DishWithId = ({match}) => {
            //this.state changed to this.props after implementing REDUX
            return(
                <div>
                    {/*
                        <comment>Number typecasting or parseInt function both are capable of converting string to int</comment>
                        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === Number(match.params.dishId))[0]}/>

                        REDUX THUNK update
                        selectedDish={this.props.dishes.filter...} becomes selectedDish={this.props.dishes.dishes.filter...}
                        added isLoading={this.props.dishes.isLoading} and errMes={this.props.dishes.errMes}
                    */}
                    <DishDetail selectedDish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMes={this.props.dishes.errMes}
                    dishComments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMes={this.props.comments.errMes}
                    postComment={this.props.postComment}
                    />
                    {/*<!--addComment prop is passed to DishDetail to access data entered by user,
                        data entered would be added to REDUX STORE state

                        fetch POST update: addComment replaced by postComment THUNK
                    -->*/}
                </div>
            );
        }
        
        //this.state changed to this.props after implementing REDUX
        return(
            <div className="App">
                <Header/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        {/*<comment>Switch groups all the Routes accessible from Main component</comment>*/}
                        <Switch>
                            <Route path="/home" component={HomePage}/>
                            {/*<comment>A component that does not take props & gets rendered from a route, then it can be written as below</comment>
                            <Route exact path="/menu" component={Menu}/>
                            <comment>
                                To pass props inline functional component or function has to be used, as per Route specification
                            </comment>*/}
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                            <Route path="/menu/:dishId" component={DishWithId}/>
                            {/*
                            <!--post REDUX THUNK update - Contact component will receive props; below Route invalid-->
                            <Route exact path="/contactus" component={Contact}/>
                            */}
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>}/>
                            <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer/>
            </div>
        );
    }
}

//syntax to connect REDUX STORE to MainComponent using connect()
//withRouter is used since the react app uses Router for navigation
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));