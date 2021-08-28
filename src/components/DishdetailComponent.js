import React from 'react';
//import React, {Component} from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Media} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDish({infoDish}){
    if(infoDish != null){
        return(
            <Card>
                <CardImg width="100%" src={infoDish.image} alt={infoDish.name}/>
                <CardBody>
                    <CardTitle>{infoDish.name}</CardTitle>
                    <CardText>{infoDish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else
        return(<div></div>);
}

function RenderComments({commentsInfo}){
    if(commentsInfo != null){
        const review = commentsInfo.map((comment) => {
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
                <Breadcrumb>
                    <BreadcrumbItem>    
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.selectedDish.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish infoDish={props.selectedDish}/>
                </div>
                <div className="col-md-5 col-12 m-1">
                    <RenderComments commentsInfo={props.dishComments}/>
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