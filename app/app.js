import React from 'react';
import ReactDOM from 'react-dom';
import Example01 from './components/Example01.js';
import Example02 from './components/Example02.js';
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(<Example02/>, document.getElementById("root"));
