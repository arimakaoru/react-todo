import React from 'react';
import axios from 'axios';

import '../css/style.css';
import Form from './Form.js';
import List from './List.js';

const endPointUrl = 'http://localhost:8000/api';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.getTodo = this.getTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleIsChecked = this.toggleIsChecked.bind(this);
        this.toggleIsDone = this.toggleIsDone.bind(this);

        this.state = {
            todoList: [],
        };
        this.getTodo();
    }

    getTodo() {
        let todoData;
        axios
            .get(`${endPointUrl}/todos/`)
            .then(res => {
                todoData = res.data.map((obj) => {
                    obj.isChecked = false;
                    return obj;
                });
                this.setState({
                    todoList: todoData,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    addTodo(todoText) {
        axios.post(`${endPointUrl}/todos/`, {
            body: todoText,
            isDone: false,
        }).then(res => {
            this.getTodo();
        }).catch(err => {
            console.log(err);
        });
    }

    deleteTodo() {
        const newState = this.state.todoList.filter((todoObj, index) => {
            if(todoObj.isChecked){
                axios.delete(`${endPointUrl}/todos/${todoObj.uuid}/`)
                    .then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    });
            }

            return !todoObj.isChecked;
        });
        this.setState({
            todoList: newState,
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
        axios.put(`${endPointUrl}/todos/${this.state.todoList[index].uuid}/`, {
            body: this.state.todoList[index].body,
            isDone: !this.state.todoList[index].isDone,
        }).then(res => {
            this.getTodo();
        }).catch(err => {
            console.log(err);
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