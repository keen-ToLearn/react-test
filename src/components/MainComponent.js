import React, {Component} from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
//import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';

//Making main component as container component
//Menu and DishDetail components would now act as presentational components
class Main extends Component{
    constructor(props){
        super(props);
        //bringing the states from Menu component here
        this.state = {
            dishes : DISHES,
        };
    }

    render(){
        const HomePage = () => {
            return(
                <Home/>
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
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;