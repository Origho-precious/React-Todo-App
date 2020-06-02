import React, { Component } from 'react';
import styles from './Layout.module.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Todo from '../Todo/Todo';

class Layout extends Component{
    state = {
        tasks: []
    }

    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.tasks !== nextState.tasks) {
            return true;
        }
        return false;
    }

    addTodo = (value) => {
        if(value !== null){
            const todo = {
                task: value,
                completed: false
            }
    
            const todos = [ ...this.state.tasks];
            todos.push(todo);
            this.setState({ tasks: todos });
        }
    }

    
    deleteTodo = (event) => {
        let todos = [ ...this.state.tasks];
        todos.forEach((todo, id) => {
            if(event === id){
                todos.splice(id, 1);
                this.setState({ tasks: todos });
            }
        })
    }

    completeTodoHandler = (event) => {
        let todos = [ ...this.state.tasks];
        todos.forEach((todo, id) => {
            if(event === id){
                todo.completed = true;
                this.setState({ tasks: todos });
            }
        })
    }

    render(){
        const todos =  this.state.tasks.map((todo, id) => {
            return <Todo 
                        key={id} 
                        text={todo.task}   
                        id={id}
                        completed={todo.completed}
                        complete={this.completeTodoHandler}
                        delete={this.deleteTodo}/>
        })
        
       
        return(
            <div className={styles.Layout}>
                <div className={styles.LayoutDiv}>
                    <Header/>
                    <Form getTodo={this.addTodo}/>
                    { todos }
                </div>
            </div>
        ) 
    }
}

export default Layout;