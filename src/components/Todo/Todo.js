import React from 'react';
import styles from './Todo.module.css'

function Todo(props) {
    let completed = [styles.Todo];
    if(props.completed){
        completed.push(styles.Completed);
    }

    return (
        <div className={completed.join(' ')}>
            <h4 className={styles.Text}>{props.text}</h4>
            <div className={styles.Btns}>
                <p className={styles.Edit} id={props.id} onClick={props.complete.bind(this, (props.id))}>Complete</p>
                <p className={styles.Delete} id={props.id} onClick={props.delete.bind(this, (props.id))}>Delete</p>
            </div>            
        </div>
    );
}

export default Todo;