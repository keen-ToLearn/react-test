//import logo from './logo.svg';
import React, {Component} from 'react';
//above import is not required if we are not defining 'App' as a class component
import Main from './components/MainComponent';
//import './App.css';
import './newApp.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            {/*<comment>App component simply using Main which handles everything</comment>*/}
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
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
