import React from "react";
import "./Row.css";


class Row extends React.Component {
    
    render() {
        const {title, isDone} = this.props;
        return (
            <>
                <div className={["row", (isDone ? 'green' : 'yellow')].join(' ')}>
                    <p>{title}</p>
                </div>
            </>
        )
    }
}

export default Row
