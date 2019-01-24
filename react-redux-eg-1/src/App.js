import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from "redux"
import { connect } from "react-redux"

import { updateUser, apiRequest } from "./actions/user-actions"

import { createSelector } from "reselect"

class App extends Component {
    constructor(props){
        super(props)
        this.onUpdateUser = this.onUpdateUser.bind(this)
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.props.onApiRequest()
    //     },1500)
    // }
    onUpdateUser(event){

        this.props.onUpdateUser(event.target.value)
    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <label>Enter Something</label>
            <br/>
            <input
                type="text"
                onChange={this.onUpdateUser} />
            <p>{this.props.user}</p>
          </div>
        );
      }
}

// const mapStateToProps = (state,props) => {
//     return{
//         products: state.products,
//         user: state.user,
//         userPlusProps: `${state.user} $ {props.aRandomProps}`
//     }

// }

const productsSelector = createSelector(
        state => state.products,
        products => products
    )
const userSelector = createSelector(
        state => state.user,
        user => user
    )

const mapStateToProps = createSelector(
        productsSelector,
        userSelector,
        (products, user) => ({
            products,
            user
        })
    )


const mapActionsToProps = {
        onUpdateUser: updateUser,
        onApiRequest: apiRequest
}

export default connect(mapStateToProps,mapActionsToProps)(App);
