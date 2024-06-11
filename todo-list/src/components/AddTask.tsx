import React, { useState } from 'react';
import styles from './css/AddTask.module.css';

interface AddTaskProps  {
    todo: string;
    setTodo: (todo: string) => void;
    handleAddTask: () => void;
}

const AddTask = ({ todo, setTodo, handleAddTask }: AddTaskProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    const [error, setError] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(todo){
        setError(false)
        handleAddTask();
        }

        else{
            setError(true)
        }

        setTodo("");
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.inputField}>
                <input 
                    type="text" 
                    placeholder="Add Task" 
                    value={todo} 
                    onChange={handleChange} 
                    className={styles.input_box}
                />
                <button type="submit" className={styles.goButton}>Go</button>
                
            </form>
            {error && (
                    <p>Please enter a task</p>
                )}
        </div>
    );
};

export default AddTask;
