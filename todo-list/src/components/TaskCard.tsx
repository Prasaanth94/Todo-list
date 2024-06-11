import React from 'react';
import styles from './css/TaskCard.module.css'

interface TaskCardProps {
    todoList: string[];
    addToComplete: (task: string) => void;
    deleteTask: (task: string) =>void;
}

const TaskCard = ({todoList, addToComplete, deleteTask} : TaskCardProps) => {
    return (
       <>
       {todoList.map((task,index) => (
        <>
        <div key={index} className={styles.taskCard}>
        <h3>{task}</h3>
        <button onClick={() => addToComplete(task)}>Done</button>
        <button>update</button>
        <button onClick={()=> deleteTask(task)}>Delete</button>
        </div>
       </>)
       )}
       </>
    );
};

export default TaskCard;