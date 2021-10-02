import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import serverData from './serverResponse.js';
serverData('weather', 12, '23263056-8420dc5c89144af04b2f7ac5b').then( data => console.log(data.hits))
ReactDOM.render(<App />,document.getElementById('root'));