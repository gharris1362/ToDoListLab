import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
let root = document.getElementById('root')



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1 id='head'> To-Do List</h1>
                <div id='importantStuff'>
                    <input placeholder="Enter Task Here" id="input"></input>
                    <button id='addTask' onClick={() => {
                        let ahh = document.getElementById('input');
                        let ahh2 = document.getElementById('tasks');
                        let ahh3 = document.createElement('br')
                        let task = ahh.value
                        if (task === '') { alert('No Task Entered') }
                        else { ahh2.append(ahh.value, ahh3); ahh.value = '' }
                    }}>Add</button>
                </div>
                <br />
                <hr id='seperator' />
                <div id='tasks'>
                    <h1 id='tasksTitle'>Tasks</h1>
                </div>
            </React.Fragment>
        )
    }


}




// const element = <App button={<button id='addTask'>Add</button>}/>





ReactDOM.render(<App />, root)



