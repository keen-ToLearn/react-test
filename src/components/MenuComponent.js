import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
//import {CardBody, CardText} from 'reactstrap';
//'CARD' REACTSTRAP COMPONENT WOULD NOW BE USED TO DETERMINE THE LAYOUT INSTEAD OF THE 'MEDIA' REACTSTRAP COMPONENT

//creating a class component
class Menu extends Component{
    //constructor which conventionally takes props as argument
    constructor(props){
        //invoking constructor of super class with 'props' parameter
        super(props);
        //adding data into component for use
        //defining a state for 'Menu' component
        //state stores properties related to component which may be used
        console.log('Menu component constructor invoked');
    }

    componentDidMount(){
        console.log('Menu component componentDidMount invoked');
    }

//to render the dish that was selected

//    renderDish(dish){
//        if(dish != null){
//            return(
//                {/*
//                <Card>
//                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
//                    <CardBody>
//                        <CardTitle>{dish.name}</CardTitle>
//                        <CardText>{dish.description}</CardText>
//                    </CardBody>
//                </Card>
//                */}
//            );
//        }
//        else{
//            return({/*<div></div>*/});
//        }
//    }

//render method that must be implemented for every component
    render(){
        //initialising 'menu'
        //map over all dish in dishes property of state
        //arrow function: take a dish and return following
        const menu = this.props.dishes.map((dish) => {
        /*
            const menu = this.state.dishes.map((dish) => {...}
            above line now needs to be changed as only props are being used
            change 'state' to 'props'
        */
            //returning a layout for every dish
            return(
                //key helps identify different list objects, dish.id has been used as a key
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/*<comment>Clicking on card should load information about dish</comment>*/}
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    {/*
                    <comment>A media list item 'li'</comment>
                    <Media tag="li">
                        <Media left middle>
                            */}
                            {/*<comment>Media object to add image</comment>*/}
                            {/*
                            <Media object src={dish.image} alt={dish.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>*/}
                            {/*<Media>{dish.description}</Media>*/}
                            {/*
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                    */}
                </div>
            );
        });
        console.log('Menu component render invoked');
        return(
            <div className="container">
                <div className="row">
                    {/*<Media list>*/}
                        {menu}
                    {/*</Media>*/}
                </div>
                {/*
                <div className="row">
                    <div className="col-12 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
                <comment>renderDish method needs to be implemented differently for assignment 1</comment>
                */}
            </div>
        );
    }
}
//export the component from here
//so that it can be imported eslewhere
export default Menu;