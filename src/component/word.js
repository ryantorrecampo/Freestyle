import React from "react";
import "./word.css";

class Word extends React.Component {
  render() {
    var i = 0;
    return (
      <div className="wrapper">
        <div className="random-word">
          {this.props.word.map(item => {
            item.id = i;
            i++;
            return <div key={item.id}>{item.word}</div>;
          })}
        </div>
        <button
          onClick={() => {
            this.props.handleClick();
          }}
        >
          Generate Words
        </button>
      </div>
    );
  }
}

export default Word;
