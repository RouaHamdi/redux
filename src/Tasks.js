import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './store';

const AddTask = () => {
    const dispatch = useDispatch();
    const [taskDescription, setTaskDescription] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
        type: 'ADD_TASK',
        payload: {
            id: Date.now(),
            description: taskDescription,
            isDone: false,
        },
        });

        setTaskDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
        </form>
    );
    };

    const ListTask = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <ul>
        {tasks.map((task) => (
            <li key={task.id}>
            {task.description}
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => {}}
            />
            </li>
        ))}
        </ul>
    );
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button type="submit">Save</button>
        </form>
    );


export default { AddTask, ListTask };