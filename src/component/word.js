import React from "react";
import "./word.css";

class Word extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="random-word">{this.props.word}</div>
                <button
                    onClick={() => {
                        this.props.handleClick();
                    }}
                >
                    Random Word
                </button>
            </div>
        );
    }
}

export default Word;
