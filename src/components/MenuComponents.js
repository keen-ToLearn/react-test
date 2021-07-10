import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle} from 'reactstrap';
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
        this.state = {
            selectedDish: null,
            //'dishes' property defined, a JS list object
            /*commenting out 'dishes' state property as now the parent class shall pass 'dishes' as props
            dishes: [
                {
                    id: 0,
                    name:'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ]*/
        }
    }
    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

//to render the dish that was selected
    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(<div></div>);
        }
    }

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
                    <Card onClick={() => {this.onDishSelect(dish)}}>
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
        return(
            <div className="container">
                <div className="row">
                    {/*<Media list>*/}
                        {menu}
                    {/*</Media>*/}
                </div>
                <div className="row">
                    <div className="col-12 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}
//export the component from here
//so that it can be imported eslewhere
export default Menu;