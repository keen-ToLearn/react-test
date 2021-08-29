import React, {Component} from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {Switch, Route, Redirect} from 'react-router-dom';

//Making main component as container component
//Menu and DishDetail components would now act as presentational components
class Main extends Component{
    constructor(props){
        super(props);
        //bringing the states from Menu component here
        this.state = {
            dishes : DISHES,
            comments : COMMENTS,
            promotions : PROMOTIONS,
            leaders : LEADERS
        };
    }

    render(){
        const HomePage = () => {
            return(
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <div>
                    {/*
                        <comment>Number typecasting or parseInt function both are capable of converting string to int</comment>
                        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === Number(match.params.dishId))[0]}/>
                    */}
                    <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    dishComments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    />
                </div>
            );
        }

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
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Route path="/aboutus" component={() => <About leaders={this.state.leaders}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;