import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';

//Making main component as container component
//Menu and DishDetail components would now act as presentational components
class Main extends Component{
    constructor(props){
        super(props);
        //bringing the states from Menu component here
        this.state = {
            dishes : DISHES,
            selectedDish : null
        };
    }
//below function would now be handled by Main component as,
//the Menu component which originally handled it is going to be a presentational component
    onDishSelect(dishID){
        this.setState({selectedDish: dishID});
    }

    render(){
        return(
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)}/>
                {/*<comment>
                    select 1st element from the array returned by filter function which
                    for each 'dish' in dishes array picks out those dishes whose
                    dish ID is equal to selectedDish
                </comment>*/}
                <DishDetail selectedDish={this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]}/>
            </div>
        );
    }
}

export default Main;