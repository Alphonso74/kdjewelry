import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import reducer from "./store/reducer";
// import 'bootstrap/dist/css/bootstrap.min.css';


const logger = store => {
    return next => {
        return action => {
            console.log('MiddleWare ', action);
            const result = next(action);
            console.log('next State ', store.getState());
            return result;
        }
    }
}

const store = createStore(reducer, applyMiddleware(logger));

const app = (
    <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    </BrowserRouter>

);

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
