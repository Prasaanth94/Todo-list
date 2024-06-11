import React from 'react';
import styles from "./css/CompletedTask.module.css"

interface CompletedTaskProps {
    completed: string[];
}

const CompletedTask = ({completed} : CompletedTaskProps) => {
    return (
        <>
        {completed.map((task, index) => (
            <div key={index} className={styles.completedTask}>
                <h3>{task}</h3>
            </div>
        ))}
        </>
    );
};

export default CompletedTask;