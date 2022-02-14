import React, {Component} from 'react';
//Row reactstrap component used instead of FormGroup
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
//updating component to use react-redux-form, applying REDUX concepts
//below components from reactstrap won't be used
// import { Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import {Link} from 'react-router-dom';
//using Form instead of LocalForm
import { Control, Form, Errors, actions } from 'react-redux-form';
//import { Control, LocalForm, Errors } from 'react-redux-form';

//val && val.length - val exists, has a value && val.length is not 0 = true;
//val exists, val.length is 0 = false
//required function checks if the field has been filled
const required = val => val && val.length;
//!val || val.length <= len
//val doesn't exist = !false = true || val.length is 0 <= len = true; true || true = true
//val exists = !true = false || val.length <= len = true; false || true = true
//val exists = !true = false || val.length > len = false; false || false = false
//function checks if field 'val' is lesser than or equal to 'len'
const maxLength = len => val => !val || (val.length <= len);
//val && val.length >= len
//val doesn't exist = false && val.length is 0 = false; false && false = false
//val exists = true && val.length >= len = true; true && true = true
//val exists = true && val.length < len = false; true && false = false
const minLength = len => val => val && (val.length >= len);
//function to check if val is pure number
const isNumber = val => !isNaN(Number(val));
//function to test val parameter for the regex pattern
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

//Contact component has been converted into a class component from a functional component
class Contact extends Component{
    constructor(props){
        super(props);
        //component state not required; would be maintained by REDUX FORM - LocalForm
        // //the state is being maintained for syncing with controlled form
        // this.state = {
        //     firstname: '',
        //     lastname: '',
        //     telnum: '',
        //     email: '',
        //     agree: false,
        //     contactType: 'Tel.',
        //     message: '',
        //     //property 'touched' checks whether a field has been filled or not
        //     touched: {
        //         firstname: false,
        //         lastname: false,
        //         telnum: false,
        //         email: false
        //     }
        // }

        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleInputChange and this.handleBlur binders not required; to be maintained by REDUX FORM
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }

    //REDUX FORM eliminates the need for the below event handler function
    //
    // //'event' is associated with Form elements like Input or Button
    // //function to handle changes to input field and update the component states simulataneously
    // handleInputChange(event){
    //     //event.target - details of Input field in Form that has changed
    //     const target = event.target;
    //     //target refers to an Input field hence, target has a type
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    //function to submit the form data
    handleSubmit(values){
        //console.log("Current state is: " + JSON.stringify(this.state));
        //alert("Current state is: " + JSON.stringify(this.state));
        //To prevent the default behaviour of opening a new browser window; 'event.preventDefault()' method is used
        //event.preventDefault();
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        //post REDUX THUNK update - below statement resets feedback form onSubmit()
        this.props.resetFeedbackForm();
    }
    //use of REDUX FORM - LocalForm necessitates changes to handleSubmit event handler as below:
    //change event -> values,   this.state -> values
    //remove event.preventDefault()

    //REDUX FORM eliminates the need for the below event handler function
    //
    // //Form validation: to change state if field has been touched
    // //field: the field that has been modified
    // handleBlur = (field) => (event) => {
    //     //Decoding the statement below
    //     //...this.state.touched -> for all in this.state.touched
    //     //only change [field] to true
    //     this.setState({
    //         touched: {...this.state.touched, [field]: true}
    //     });
    // }

    //REDUX FORM eliminates the need for the function for form validation below
    //
    // //function to validate information in Input fields
    // validate(firstname, lastname, telnum, email){
    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     }

    //     if(this.state.touched.firstname && firstname.length < 3)
    //         errors.firstname = "First Name should be >= 3 characters";
    //     else if(this.state.touched.firstname && firstname.length > 10)
    //         errors.firstname = "First Name should be <= 10 characters";
        
    //     if(this.state.touched.lastname && lastname.length < 3)
    //         errors.lastname = "Last Name should be >= 3 characters";
    //     else if(this.state.touched.lastname && lastname.length > 10)
    //         errors.lastname = "Last Name should be <= 10 characters";

    //     //reg = /^\d+$/ implies all characters in string are numbers
    //     const reg = /^\d+$/;
    //     //test method for regular expressions, does search for 'reg' pattern in string & returns boolean value accordingly
    //     if(this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum = "Tel. No. should contain numbers only";
        
    //     if(this.state.touched.email && email.split('').filter((x) => x === '@').length !== 1)
    //         errors.email = "Email should contain an '@' sign";
        
    //     return errors;
    // }

    render(){
        //not using validate function due to - REDUX FORM
        //
        // //Best time to validate form is when it is re-rendered
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="/home"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                {/*<comment>Controlled form below</comment>*/}
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        {/*
                            <!--REDUX FORM update
                            Form -> LocalForm i.e. <Form onSubmit={this.handleSubmit}> -> <LocalForm> ...
                            onSubmit={this.handleSubmit} -> onSubmit={(values) => this.handleSubmit(values)}
                            'values' is an object of field data provided by the REDUX LocalForm-->

                            <!--post REDUX THUNK update
                            LoaclForm -> Form(imported from react-redux-form and not reactstrap)
                            model="feedback" links Form to actions.reset('feedback'), refer Main component-->
                        */}
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            {/*
                            <comment>A 'FormGroup row' refers to one row of a form</comment>
                            <comment>'FormGroup row' implements bootstrap grid, FormGroup elements can have classes to specify layout</comment>
                            */}
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                {/*
                                    <div className="col-md-10"></div>
                                    <comment>Above 'div' statement is equivalent to below 'Col'</comment>
                                */}
                                <Col md={10}>
                                    {/*
                                    <comment>Tying component state to the state of this Input form element: value={this.state.firstname}</comment>
                                    <!--
                                    validators is a dictonary of types of validation that need to be performed, value of the key represents the testing function
                                    -->
                                    */}
                                    <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    // {/*value={this.state.firstname} valid={errors.firstname === ''} invalid={errors.firstname !== ''}
                                    // onChange={this.handleInputChange} onBlur={this.handleBlur('firstname')}*/}
                                    />
                                    
                                    {/*<comment>FormFeedback reactstrap component is used generally to display errors as a result of Form validation</comment>*/}
                                    {/*<FormFeedback>{errors.firstname}</FormFeedback>*/}
                                    <Errors className="text-danger" model=".firstname" show="touched"
                                    messages={{
                                        required: 'Required\n',
                                        minLength: 'Must be greater than 2 characters\n',
                                        maxLength: 'Must be lesser than 15 characters\n'
                                    }}/>
                                    {/*
                                    <!--Errors react-redux-form component is used to highlight form validation messages
                                    show attribute: when to show the error messages, touched = when there is focus on the field-->
                                    */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    {/*<comment>valid, invalid attribute determine if Input field is valid or not</comment>*/}
                                    <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    // {/*value={this.state.lastname} valid={errors.lastname === ''} invalid={errors.lastname !== ''}
                                    // onChange={this.handleInputChange} onBlur={this.handleBlur('lastname')}*/}
                                    />
                                    {/*<FormFeedback>{errors.lastname}</FormFeedback>*/}
                                    <Errors className="text-danger" model=".lastname" show="touched"
                                    messages={{
                                        required: 'Required\n',
                                        minLength: 'Must be greater than 2 characters\n',
                                        maxLength: 'Must be lesser than 15 characters\n'
                                    }}/>
                                </Col>
                            </Row>
                            {/*
                                <!--REDUX FORM update
                                <FormGroup row> -> <Row className="form-group">
                                FormFeedback won't be used for form validation
                                <Input type="text"... -> <Control.text...
                                add model=".firstname", add className="form-control"
                                <Label htmlFor="firstName"... -> <Label htmlFor=".firstname"...
                                value, valid, invalid, onChange, onBlur attributes to input field not required; being handled by REDUX FORM
                                -->
                            */}
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Telephone No.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Telephone No." className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }}
                                    // {/*value={this.state.telnum} valid={errors.telnum === ''} invalid={errors.telnum !== ''}
                                    // onChange={this.handleInputChange} onBlur={this.handleBlur('telnum')}*/}
                                    />
                                    {/*<FormFeedback>{errors.telnum}</FormFeedback>*/}
                                    <Errors className="text-danger" model=".telnum" show="touched"
                                    messages={{
                                        required: 'Required\n',
                                        minLength: 'Must be greater than 2 numbers\n',
                                        maxLength: 'Must be lesser than 15 numbers\n',
                                        isNumber: 'Must be a number\n'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control"
                                    validators={{
                                        required, validEmail
                                    }}
                                    // {/*value={this.state.email} valid={errors.email === ''} invalid={errors.email !== ''}
                                    // onChange={this.handleInputChange} onBlur={this.handleBlur('email')}*/}
                                    />
                                    {/*<FormFeedback>{errors.email}</FormFeedback>*/}
                                    <Errors className="text-danger" model=".email" show="touched"
                                    messages={{
                                        required: 'Required\n',
                                        validEmail: 'Invalid email address\n'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                {/*<comment>
                                    Plugging in JS code in JSX 'Col' element
                                    the JS object specifies the layout in terms of size of field/column & no. of columns to offset
                                </comment>*/}
                                <Col md={{size:6, offset:2}}>
                                    {/*
                                        <!--
                                        REDUX FORM updates
                                        <FormGroup check> -> <div className="form-check">
                                        <Input type="checkbox"... -> <Control.checkbox...
                                        add model=".agree", add className="form-check-input"
                                        attributes checked and onChange are not required, to be handled by REDUX FORM
                                        -->
                                    */}
                                    <div className="form-check">
                                        <Label check>
                                            {/*<comment>
                                                1. For input type - checkbox, 'checked' attribute TIES the component and form states
                                                2. {' '} - to add space to the view
                                            </comment>*/}
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input"
                                            // {/*checked={this.state.agree} onChange={this.handleInputChange}*/}
                                            />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    {/*
                                        <!--
                                        REDUX FORM updates
                                        <Input type="select" -> <Control.select
                                        add model=".contactType", add className="form-control"
                                        attributes value and onChange not required; would be handled by REDUX FORM
                                        -->
                                    */}
                                    <Control.select model=".contactType" name="contactType" className="form-control"
                                    // {/*value={this.state.contactType} onChange={this.handleInputChange}*/}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    {/*
                                        <!--
                                        REDUX FORM updates
                                        <Input type="textarea" -> <Control.textarea
                                        add model=".message", add className="form-control"
                                        remove value, onChange attributes; to be handled by REDUX FORM
                                        -->
                                    */}
                                    <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control"
                                    // {/*value={this.state.message} onChange={this.handleInputChange}*/}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;