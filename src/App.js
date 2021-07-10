//import logo from './logo.svg';
import React, {Component} from 'react';
//above import is not required if we are not defining 'App' as a component
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';
import {DISHES} from './shared/dishes';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/*<comment>providing jsx attribute dishes as props to menu component</comment>*/}
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

//function App() {
//  return (
//    {/*
//    <div className="App">
//      <Navbar dark color="primary">
//        <div className="container">
//          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//        </div>
//      </Navbar>
//      <Menu/>
//    </div>
//    */}
//  );
//}

export default App;
