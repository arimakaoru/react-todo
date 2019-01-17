import React from 'react';

// import '../css/List.css'

export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checkedIndex: [],
        };

        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    handleCheckChange(changedItemIndex, event) {
        if(event.target.checked){
            this.setState({
                checkedIndex: this.state.checkedIndex.concat(changedItemIndex),
            });
        }else{
            this.setState({
                checkedIndex: this.state.checkedIndex.filter((el) => {
                    return el !== changedItemIndex;
                }),
            });
        }
    }

    render() {
        const listItems = this.props.todoList.map((todo, index) => {
            return (
                <li key={index}>
                    <input
                        type="checkbox"
                        checked={this.state.check}
                        onChange={(event) => this.handleCheckChange(index, event)} />
                    {todo}
                </li>
            );
        });

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}