import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
let root = document.getElementById('root')
let button = document.getElementById('addTask')
let input = document.getElementById('input')
let Tasklist = document.getElementById('tasks');


// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
              
//             </React.Fragment>
//         )
//     }
// }


// ReactDOM.render(<App />, root)


button.addEventListener('click', () => {
   Tasklist.append(input.value);
})



