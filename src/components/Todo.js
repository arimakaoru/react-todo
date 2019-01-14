import React from 'react';

import '../css/Todo.css';
import Form from './Form.js';
import List from './List.js';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: ['aaaaa', 'bbbbbb', 'ccccc'],
        };
    }

    render () {
        return (
            <div className="todo">
                <h1>React Todo App</h1>
                <Form />
                <List
                    todoList={this.state.todoList}
                />
            </div>
        );
    }

}