import React, {Component} from 'react';
//import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Media, Button, Modal, ModalHeader, ModalBody, Label, FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm, Control, Errors} from 'react-redux-form';

const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        //updates after implementing REDUX ACTIONS
        //not giving alert on submit
        // console.log("Current state is: "+JSON.stringify(values));
        // alert("Current state is: "+JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        //above statement triggers dispatch() with addComment() as parameter,
        //refer MainComponent - dispatch(addComment(dishId, rating, author, comment))
        //dispatch() will take action object returned by addComment() and trigger the reducer function - Comments
    }

    render(){
        return(
            <>
                <Button outline onClick={this.toggleModal}><span className='fa fa-pencil fa-lg'></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control"
                                validators={{
                                    minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                                <Errors model=".author" className="text-danger" show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control"/>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </FormGroup>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

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

function RenderComments({commentsInfo, addComment, dishId}){
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
            <>
                <Media list className="list-unstyled">
                    <h4>Comments</h4>
                    {review}
                </Media>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </>
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
                    <RenderComments commentsInfo={props.dishComments} addComment={props.addComment} dishId={props.selectedDish.id}/>
                    {/*<!--dish.id is passed for addComment to create action object-->*/}
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