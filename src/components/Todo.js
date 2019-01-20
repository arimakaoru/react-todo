import React from 'react';

import '../css/style.css';
import Form from './Form.js';
import List from './List.js';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        };

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleIsChecked = this.toggleIsChecked.bind(this);
        this.toggleIsDone = this.toggleIsDone.bind(this);
    }

    addTodo(todoText) {
        this.setState({
            todoList: this.state.todoList.concat({
                text: todoText,
                isChecked: false,
                isDone: false,
            }),
        });
    }

    deleteTodo() {
        this.setState({
            todoList: this.state.todoList.filter((todoObj, index) => {
                return !todoObj.isChecked;
            }),
        });
    }

    toggleIsChecked(index) {
        const newTodoList = this.state.todoList;
        newTodoList[index].isChecked = !this.state.todoList[index].isChecked;
        this.setState({
            todoList: newTodoList,
        });
    }

    toggleIsDone(index) {
        const newTodoList = this.state.todoList;
        newTodoList[index].isDone = !this.state.todoList[index].isDone;
        this.setState({
            todoList: newTodoList,
        });
    }

    render() {
        return (
            <div className="todo">
                <h1 className="todo__title">React ToDo App</h1>
                <Form
                    addTodo={this.addTodo}
                />
                <h2>ToDo List</h2>
                <List
                    todoList={this.state.todoList}
                    deleteTodo={this.deleteTodo}
                    toggleIsChecked={this.toggleIsChecked}
                    toggleIsDone={this.toggleIsDone}
                />
            </div>
        );
    }

}