import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, compose, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

import productsReducer from "./reducers/products-reducer"
import userReduer from "./reducers/user-reducer"





const allReducers = combineReducers({
    products: productsReducer,
    user: userReduer
})

const initialState = {
    products: [{name:'iPhone'},{name:'samsung'}],
    user:'Kamal'
}
const allStoreEnhancers = compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
const store = createStore(allReducers,
                          initialState,
                          allStoreEnhancers
                         )

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App
            aRandomProps="whatever!!!"
        />
    </Provider>
    , rootElement);
serviceWorker.unregister();
