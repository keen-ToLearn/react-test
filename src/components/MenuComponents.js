import React, { Component } from 'react';
import { Media } from 'reactstrap';
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
            //'dishes' property defined, a JS list object
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
            ]
        }
    }
//render method that must be implemented for every component
    render(){
        //initialising 'menu'
        //map over all dish in dishes property of state
        //arrow function: take a dish and return following
        const menu = this.state.dishes.map((dish) => {
            //returning a layout for every dish
            return(
                //key helps identify different list objects, dish.id has been used as a key
                <div key={dish.id} className="col-12 mt-5">
                    {/*<comment>A media list item 'li'</comment>*/}
                    <Media tag="li">
                        <Media left middle>
                            {/*<comment>Media object to add image</comment>*/}
                            <Media object src={dish.image} alt={dish.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            {/*<Media>{dish.description}</Media>*/}
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}
//export the component from here
//so that it can be imported eslewhere
export default Menu;