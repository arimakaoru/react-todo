import React from 'react';


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
                    <div className="form__items"><input type="text" value={this.state.todoText} onChange={this.todoTextChange} className="input-txt form__input-txt" />
                    <button type="submit" className="btn form__btn">Add</button></div>
                </form>
            </div>
        );
    }
}