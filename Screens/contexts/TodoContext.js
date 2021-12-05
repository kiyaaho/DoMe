import React from 'react';
import {createContext, useState} from 'react';

const TodoContext = createContext({
    title : '',
    duedate: '',
    comment: '',
    settingTitle: () => {},
    settingDueDate: () => {},
    settingComment: () => {},
});

const TodoProvider = ({children}) => {
    const [title, setTitle] = useState('');
    const [duedate, setDueDate] = useState('');
    const [comment, setComment] = useState('');
    
    const todos = {title: title, duedate: duedate, comment: comment, 
    settingTitle : setTitle, settingDueDate : setDueDate, settingComment : setComment};

    return <TodoContext.Provider value = {todos}>{children}</TodoContext.Provider>;
};

const TodoConsumer = TodoContext.Consumer;

export {TodoConsumer, TodoProvider};
export default TodoContext;
