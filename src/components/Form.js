import React from 'react';

// import '../css/Form.css'

export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
        };

        this.todoTextChange = this.todoTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    todoTextChange(event) {
        this.setState({
            todoText: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.todoText === ''){
            return;
        }
        this.setState({
            todoText: '',
        });
        this.props.addTodo(this.state.todoText);
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <p><input type="text" value={this.state.todoText} onChange={this.todoTextChange}/></p>
                    <p><button type="submit">追加する</button></p>
                </form>
            </div>
        );
    }
}