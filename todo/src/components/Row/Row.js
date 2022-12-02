import React from "react";
import "./Row.css";


class Row extends React.Component {
    
    render() {
        const {title, isDone, id, updateState, removeTodo} = this.props;
        return (
            <>
                <div className={["row", (isDone ? 'green' : 'yellow')].join(' ')}>
                    <p onClick={() => {updateState(id)}}>{title}</p>
                    <button onClick={() => {removeTodo(id)}}>Remove</button>
                </div>
            </>
        )
    }
}

export default Row
