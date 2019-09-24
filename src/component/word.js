import React from "react";
import "./word.scss";

class Word extends React.Component {
    render() {
        var i = 0;
        return (
            <div className="wrapper">
                <div id="container">
                    <button
                        class="learn-more"
                        onClick={() => {
                            this.props.handleClick();
                        }}
                    >
                        <div class="circle">
                            <span class="icon arrow"></span>
                        </div>
                        <p class="button-text">~Words</p>
                    </button>
                </div>
                <div className="random-word">
                    {this.props.word.map(item => {
                        item.id = i;
                        i++;
                        return <div key={item.id}>{item.word}</div>;
                    })}
                </div>
            </div>
        );
    }
}

export default Word;
