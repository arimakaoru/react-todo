import React from 'react';

// import '../css/List.css'

export default class List extends React.Component{
    render() {
        const listItems = this.props.todoList.map((todoObj, index) => {
            return (
                <li key={index}>
                    <input
                        type="checkbox"
                        checked={todoObj.isChecked}
                        onChange={(event) => this.props.toggleIsChecked(index, event)} />
                    {todoObj.text}
                </li>
            );
        });

        return (
            <div className="list">
                <ul>
                    {listItems}
                </ul>
                <button
                    type="button"
                    onClick={this.props.deleteTodo}>削除する</button>
            </div>
        );
    }
}