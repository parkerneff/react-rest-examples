import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTHTOKEN';
axios.defaults.headers.post['Content-Type'] = "application/json";  // is default, but shows how to override
axios.interceptors.request.use(request => {

    console.log(request);
    // Edit the request, i.e. add Auth headers
    return request; // important. Will block request if not added

}, error => {
    console.log(error);
    return Promise.reject(error);
});


axios.interceptors.response.use(
    response => {

        console.log(response);
        // Edit the request, i.e. add Auth headers
        return response; // important. Will block request if not added

    }, error => {
        console.log(error);
        return Promise.reject(error);
    }

);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
