import React from 'react';


export default class List extends React.Component{
    render() {
        if(this.props.todoList.length === 0){
            return (
                <p>No List.</p>
            );
        }
        const listItems = this.props.todoList.map((todoObj, index) => {
            return (
                <li key={index} className="list__ul__li">
                    <label className={this.props.todoList[index].isDone ? 'txt list__txt list__txt--done' : 'txt list__txt'}>
                        <input
                            type="checkbox"
                            checked={todoObj.isChecked}
                            onChange={(event) => this.props.toggleIsChecked(index, event)}
                            className="input-checkbox list__checkbox" />
                        {todoObj.body}
                    </label>
                    <button
                        type="button"
                        onClick={(event) => this.props.toggleIsDone(index, event)}
                        className="btn">
                        {this.props.todoList[index].isDone ? 'Cancel' : 'Done'}
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
                    className="btn btn__delete">Delete</button>
            </div>
        );
    }
}