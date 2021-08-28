//import React, { Component } from 'react';
import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
//import {CardBody, CardText} from 'reactstrap';
import {Link} from 'react-router-dom';

//creating a functional component which is presentational in nature
//Method 1 of passing props - directly specifying the objects passed through props
function RenderMenuItem({dish}){
    return(
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

//Method 2 of passing props
//using arrow function to implement 'Menu' functional component
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

//creating a class component
// class Menu extends Component{
//     //constructor which conventionally takes props as argument
//     //below constructor is 'useless as it is not maintaining any state or performing any other function
//     // constructor(props){
//     //     //invoking constructor of super class with 'props' parameter
//     //     super(props);
//     //     //adding data into component for use
//     //     //defining a state for 'Menu' component
//     //     //state stores properties related to component which may be used
//     //     console.log('Menu component constructor invoked');
//     // }

//     componentDidMount(){
//         console.log('Menu component componentDidMount invoked');
//     }

// //to render the dish that was selected

// //    renderDish(dish){
// //        if(dish != null){
// //            return(
// //                {/*
// //                <Card>
// //                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
// //                    <CardBody>
// //                        <CardTitle>{dish.name}</CardTitle>
// //                        <CardText>{dish.description}</CardText>
// //                    </CardBody>
// //                </Card>
// //                */}
// //            );
// //        }
// //        else{
// //            return({/*<div></div>*/});
// //        }
// //    }

//     renderDish(dish){
//         if(dish != null)
//             return(
//                 {/*<DishDetail selectedDish={dish}/>*/}
//             );
//         else
//             return({/*<div></div>*/});
//     }
// //render method that must be implemented for every component
//     render(){
//         //initialising 'menu'
//         //map over all dish in dishes property of state
//         //arrow function: take a dish and return following
//         const menu = this.props.dishes.map((dish) => {
//             //returning a layout for every dish
//             return(
//                 //key helps identify different list objects, dish.id has been used as a key
//                 {/*<div key={dish.id} className="col-12 col-md-5 m-1">
//                     <comment>Clicking on card should load information about dish</comment>
//                     <Card onClick={() => this.props.onClick(dish.id)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name}/>
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>*/}
//             );
//         });
//         console.log('Menu component render invoked');
//         return(
//             {/*<div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//                 <div className="row">
//                     <div className="col-12 m-1">
//                         {this.renderDish(this.state.selectedDish)}
//                     </div>
//                 </div>
//                 <comment>renderDish method needs to be implemented differently for assignment 1</comment>
//                 {this.renderDish(this.state.selectedDish)}
//             </div>*/}
//         );
//     }
// }

//export the component from here
//so that it can be imported eslewhere
export default Menu;