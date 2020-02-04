import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import TaskForm from '../Components/TaskForm';

class App extends React.Component {
    states={
        tasks : [
            {title: " 1",
            description: "tarea inicial"}
        ],
    }
    //arrow fuction
    handleAddTask = (newTask) => {

        this.setState((currentState) => {
            return{
                task: [
                    ...currentState.task
                ]
            }
            }
        )
    };
//renderisacion
    render() {
        const {tasks} = this.state;
        return (
            //creacion de formulario
            <div>
                <h1>lista de tareas</h1>
               <TaskForm title = "agregar tarea"
                         buttonText="agregar"
                         onClickButton={this.handleAddTask} />

                <ul>
                    {tasks.map((task) => <li>{task.title}</li>)}
                </ul>

            </div>
        );
    }
}
export default App;
