import React, { Component } from "react";
import "./Youtube.css";

const API = "AIzaSyDSZGDjSA2wK7DlL7VoArJgM4HksYySoDM";
const channelID = "UCkOP44xB8mlNEdhhQ_oRiPQ";
const result = 1;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked() {
        fetch(finalURL)
            .then(response => response.json())
            .then(responseJson => {
                const resultyt = responseJson.items.map(
                    obj => "https://www.youtube.com/embed/" + obj.id.videoId
                );
                this.setState({ resultyt });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        console.log(this.state.resultyt);

        return (
            <div>
                <button onClick={this.clicked}>Shuffle</button>
                {this.state.resultyt.map((link, i) => {
                    console.log(link);
                    var frame = (
                        <div key={i} className="youtube">
                            <iframe
                                width="560"
                                height="315"
                                src={link}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    );
                    return frame;
                })}
                {this.frame}
            </div>
        );
    }
}

export default Youtube;
