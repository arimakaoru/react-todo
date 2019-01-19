import React from 'react';

import '../css/List.css';

export default class List extends React.Component{
    render() {
        const listItems = this.props.todoList.map((todoObj, index) => {
            return (
                <li key={index}>
                    <label className={this.props.todoList[index].isDone ? 'list__text--done' : ''}>
                        <input
                            type="checkbox"
                            checked={todoObj.isChecked}
                            onChange={(event) => this.props.toggleIsChecked(index, event)} />
                        {todoObj.text}
                    </label>
                    <button
                        type="button"
                        onClick={(event) => this.props.toggleIsDone(index, event)}>
                        {this.props.todoList[index].isDone ? '完了取り消し' : '完了する'}
                    </button>
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