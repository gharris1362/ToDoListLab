import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let root = document.getElementById('root')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: [],
            compare: true
        }
    }

    removeItem = (item) => {
        console.log(item);
        let newArr = this.state.newTask.filter(arrItem => arrItem !== item)
        this.setState({ newTask: newArr });
    }

    render() {
        return (
            <React.Fragment>
                <div id='importantStuff'>
                    <h1>To-Do List</h1>
                    <input placeholder='Enter Task Here' id='addTask'></input>
                    <button id='submitTask' onClick={() => {
                        let addTask = document.getElementById('addTask');
                        if (addTask.value !== '') {
                            this.setState({ newTask: [...this.state.newTask, addTask.value] })
                            addTask.value = ''
                        } else {
                            alert('You cannot enter a blank task')
                        }
                    }}>Add!</button>
                </div>
                <br />
                <hr id='break' />
                <div id='taskArea'>
                    <h1 id='tasksTitle'>Tasks!</h1>
                    {this.state.newTask.map((task, i) => {
                        return <h2
                            key={i}
                            onDoubleClick={() => this.removeItem(task)}
                        >{task}</h2>
                    })
                    }
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, root)