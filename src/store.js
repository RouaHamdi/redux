import { createStore } from 'redux';

const initialState = {
    tasks: [],
    };

    const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
        return {
            ...state,
            tasks: [...state.tasks, action.payload],
        };
        case 'TOGGLE_TASK_COMPLETED':
        return {
            ...state,
            tasks: state.tasks.map((task) => {
            if (task.id === action.payload) {
                return {
                ...task,
                isDone: !task.isDone,
                };
            }
            return task;
            }),
        };
        case 'DELETE_TASK':
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
    }
};

const store = createStore(reducer, initialState);
export default store;