import React, { Component } from "react";
import "./Youtube.scss";

const API = "AIzaSyDSZGDjSA2wK7DlL7VoArJgM4HksYySoDM";
const playlistId = "PLLlJxAcQth2uTyofPvsINUO9pO-hRWNTe";
const result = 10;
var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${result}&playlistId=${playlistId}&key=${API}`;

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultyt: [],
            index: 0,
            nbrs: new Set()
        };
    }
    componentDidMount() {
        fetch(finalURL)
            .then(response => response.json())
            .then(responseJson => {
                const resultyt = responseJson.items.map(
                    obj =>
                        "https://www.youtube.com/embed/" +
                        obj.snippet.resourceId.videoId
                );
                this.setState({ resultyt });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleClick() {
        this.setState(state => {
            let res = Math.floor(Math.random() * result - 1);
            let checker = true;
            while (checker) {
                if (this.state.nbrs.has(res)) {
                    res = Math.floor(Math.random() * result - 1);
                } else {
                    this.state.nbrs.add(res);
                    checker = false;
                }
            }
            if (this.state.nbrs.size === result) {
                this.state.nbrs.clear();
            }
            return { index: res };
        });
    }

    render() {
        return (
            <div>
                <div className="youtube">
                    <iframe
                        width="560"
                        height="315"
                        src={this.state.resultyt[this.state.index]}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                {this.frame}
                <div id="container">
                    <button
                        class="learn-more"
                        onClick={() => this.handleClick()}
                    >
                        <div class="circle">
                            <span class="icon arrow"></span>
                        </div>
                        <p class="button-text">~Song</p>
                    </button>
                </div>
            </div>
        );
    }
}

export default Youtube;
