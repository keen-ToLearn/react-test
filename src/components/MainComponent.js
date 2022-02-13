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
import {addComment, fetchDishes} from '../redux/ActionCreators';

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
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) }
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
                        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                    />
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
                    dishComments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    addComment={this.props.addComment}
                    />
                    {/*
                        <!--addComment prop is passed to DishDetail to access data entered by user,
                        data entered would be added to REDUX STORE state-->
                    */}
                </div>
            );
        }
        
        //this.state changed to this.props after implementing REDUX
        return(
            <div className="App">
                <Header/>
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
                    <Route exact path="/contactus" component={Contact}/>
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

//syntax to connect REDUX STORE to MainComponent using connect()
//withRouter is used since the react app uses Router for navigation
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));