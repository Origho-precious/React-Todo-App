import React, { Component } from 'react';
import styles from './Form.module.css'

class Form extends Component{
    state = {
        value: ''
    }

    getTodoText = (event) => {
        if(event.target.value !== null){
            this.setState({ value: event.target.value})
        }

        event.preventDefault()
    }

    submitTodo = (event) => {
        event.preventDefault();
        if(this.state.value !== ''){
            this.props.getTodo(this.state.value)
        }

        this.setState({ value: '' })

    } 

    render(){
        return (
            <form className={styles.Form} onSubmit={this.submitTodo} >
                <input 
                    className={styles.Input} 
                    type="text" 
                    onChange={this.getTodoText}
                    value={this.state.value} 
                    placeholder="Enter task"/>
                <input 
                    className={styles.Submit}
                    type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;