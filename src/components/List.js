import React from 'react';

// import '../css/List.css'

const List = (props) => {
    const listItems = props.todoList.map((todo, index) => {
        return (
            <li key={index}>{todo}</li>
        );
    });


    return (
        <div className="list">
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

export default List;