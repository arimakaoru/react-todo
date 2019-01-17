import React from 'react';

import '../css/Todo.css';
import Form from './Form.js';
import List from './List.js';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        };

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todoText) {
        this.setState({
            todoList: this.state.todoList.concat(todoText),
        });
    }

    render() {
        return (
            <div className="todo">
                <h1>React Todo App</h1>
                <Form
                    addTodo={this.addTodo}
                />
                <div className="list">
                    <List
                        todoList={this.state.todoList}
                    />
                </div>
            </div>
        );
    }

}