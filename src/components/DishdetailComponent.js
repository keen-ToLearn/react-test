import React from 'react';
//import React, {Component} from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import {Media} from 'reactstrap';

function RenderDish({info}){
    if(info != null){
        return(
            <Card>
                <CardImg width="100%" src={info.image} alt={info.name}/>
                <CardBody>
                    <CardTitle>{info.name}</CardTitle>
                    <CardText>{info.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else
        return(<div></div>);
}

function RenderComments({info}){
    if(info != null){
        const review = info.comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <Media tag="li">
                        <Media body>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {comment.date.slice(0,10)}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return(
            <Media list className="list-unstyled">
                <h4>Comments</h4>
                {review}
            </Media>
        );
    }
    else
        return(<div></div>);
}

const DishDetail = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish info={props.selectedDish}/>
                </div>
                <div className="col-md-5 col-12 m-1">
                    <RenderComments info={props.selectedDish}/>
                </div>
            </div>
        </div>
    );
}

// class DishDetail extends Component{
//     // constructor(props){
//     //     super(props);

//     //     // this.state = {
//     //     //     dishinfo: this.props.selectedDish
//     //     // }
//     //     //commenting out state as props can be directly used
//     //     //no state makes this component stateless and presentational
//     //     console.log('DishDetail component constructor invoked');
//     // }

//     componentDidUpdate(){
//         console.log('DishDetail component componentDidUpdate invoked');
//     }

//     renderDish(info){
//         if(info != null){
//             return(
//                 {/*<Card>
//                     <CardImg width="100%" src={info.image} alt={info.name}/>
//                     <CardBody>
//                         <CardTitle>{info.name}</CardTitle>
//                         <CardText>{info.description}</CardText>
//                     </CardBody>
//                 </Card>*/}
//             );
//         }
//         else
//             return({/*<div></div>*/});
//     }

//     renderComments(info){
//         if(info != null){
//             const review = info.comments.map((comment) => {
//                 return(
//                     {/*<div key={comment.id}>
//                         <Media tag="li">
//                             <Media body>
//                                 <p>{comment.comment}</p>
//                                 <p>--{comment.author}, {comment.date.slice(0,10)}</p>
//                             </Media>
//                         </Media>
//                     </div>*/}
//                 );
//             });
//             return(
//                 {/*<Media list className="list-unstyled">
//                     <h4>Comments</h4>
//                     {review}
//                 </Media>*/}
//             );
//         }
//         else
//             return({/*<div></div>*/});
//     }

//     render(){
//         console.log(this.props.selectedDish);
//         return(
//             {/*<div className="container">
//                 <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         {this.renderDish(this.props.selectedDish)}
//                     </div>
//                     <div className="col-md-5 col-12 m-1">
//                             {this.renderComments(this.props.selectedDish)}
//                     </div>
//                 </div>
//             </div>*/}
//         );
//     }
// }

export default DishDetail;