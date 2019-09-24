import React from "react";
import ReactDOM from "react-dom";
import Youtube from "./component/Youtube";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import WordCon from "./container/word-container";
import "./index.scss";

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return <WordCon></WordCon>;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <h1>Freestyle</h1>
        <Youtube />
        <App />
    </Provider>,
    document.getElementById("root")
);
