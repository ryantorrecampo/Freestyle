//this has access to the reducers
import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import Word from "../component/word";

class WordCon extends React.Component {
  render() {
    return (
      <Word handleClick={this.props.loadWord} word={this.props.arr}></Word>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(WordCon);
