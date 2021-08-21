import React, {Component} from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
//import DishDetail from './DishdetailComponent';
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
                    <Route exact path="/contactus" component={Contact}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;