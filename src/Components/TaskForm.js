import React from "react";
class TaskForm extends React.Component {
    render() {

        states={
            title:"",
            description:"",
        }

        handleChangeTitle = (e) => {
            this.setState( {
                title: e.target.value
            })
        };

        handleChangeDescription = (e) => {
            this.setState( {
                title: e.target.value
            })
        };

        handleClick = () => this.props.onClickButton {
        const newTask = {
            title: this.state.title,
            description: this.state.description,
        };
    };


     const {title, description}= this.state;
    return (
        //creacion de formulario


        <div>
            <h1>lista de tareas</h1>
            <div>
                <label htmlFor="title">titulo </label>
                <input type="text" id="title" onChange={this.handleChangeTitle} value={title}/>
            </div>

            <div>
                <label htmlFor="description"> descripcion</label>
                <input type="text" id="description" value={description}/>
            </div>

            <div>
                <button onClick={this.props.onClickButton} >agregar</button>
            </div>



        </div>
    );
}
}
export default TaskForm;
