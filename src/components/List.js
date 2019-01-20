import React from 'react';


export default class List extends React.Component{
    render() {
        const listItems = this.props.todoList.map((todoObj, index) => {
            return (
                <li key={index} className="list__ul__li">
                    <label className={this.props.todoList[index].isDone ? 'txt list__txt list__txt--done' : 'txt list__txt'}>
                        <input
                            type="checkbox"
                            checked={todoObj.isChecked}
                            onChange={(event) => this.props.toggleIsChecked(index, event)}
                            className="input-checkbox list__checkbox" />
                        {todoObj.text}
                    </label>
                    <button
                        type="button"
                        onClick={(event) => this.props.toggleIsDone(index, event)}
                        className="btn">
                        {this.props.todoList[index].isDone ? '完了取り消し' : '完了'}
                    </button>
                </li>
            );
        });

        return (
            <div className="list">
                <ul className="list__ul">
                    {listItems}
                </ul>
                <button
                    type="button"
                    onClick={this.props.deleteTodo}
                    className="btn btn__delete">削除</button>
            </div>
        );
    }
}