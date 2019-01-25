import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import BaseRouter from "./routes"


import PostForm from "./components/PostForm"
import CustomLayout from "./components/Layout"
import store from "./store"



class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BrowserRouter>
          <CustomLayout>
            <PostForm/>
            <hr/>
            <BaseRouter />
          </CustomLayout>
        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
