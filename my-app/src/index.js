
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import uniqueId from 'react-html-id';
import Logo from './trashcan.png'


let root = document.getElementById('root')

class App extends Component {
    constructor(props) {
        super(props)
        uniqueId.enableUniqueIds(this)
        this.state = {
            newTask: [],
            compare: true,
            taskStyle: 'text-decoration: linethrough',
            

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

                        return (<h2 id='returnedTasks'
                            key={i}
                        // onDoubleClick={() => this.removeItem(task)}
                        >
                        <label 
                            className='ahh'
                            onClick={() => {
                                let label = document.getElementsByClassName('ahh')
                                
                                label.style = {
                                    color: 'red',
                                    textDecoration: 'line-through'
                                }
                               
                            }}>
                            <input type='checkbox' value="checked" className={i}/>{task}
                        </label>
                        <img src={Logo} alt='ahhh' id='image' onClick={() => this.removeItem(task)}></img></h2>)
                    })
                    }
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, root)