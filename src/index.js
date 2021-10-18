import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';




// axios.defaults.baseURL = 'http://10.33.21.145:5000';
axios.defaults.baseURL = 'http://localhost:5000/';
// axios.defaults.baseURL = 'https://metagraph-server.herokuapp.com/'; 
// axios.defaults.baseURL = 'https://clustering-dev.azurewebsites.net';


//axios.create({
//baseURL:'http://10.33.21.145:5000'
///})
//axios.defaults.withCredentials = true;

//axios.request(options).catch(function(error) {
//if (!error.status) {
//console.log('Network error')
// }
//});

//const instance = axios.create(
//{
//      baseURL: "http://10.33.21.145:5000",
//    withCredentials: false,
//    headers: {
//    'Access-Control-Allow-Origin' : '*',
//  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
//  }
// })
//axios.create({baseURl:"http://10.33.21.145:5000"});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
