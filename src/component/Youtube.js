import React, { Component } from 'react';
import './Youtube.scss';

const API = 'AIzaSyDSZGDjSA2wK7DlL7VoArJgM4HksYySoDM';
const playlistId = 'PLLlJxAcQth2uTyofPvsINUO9pO-hRWNTe';
const result = 10;
var finalURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${result}&playlistId=${playlistId}&key=${API}`;

class Youtube extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resultyt: [],
			index: 0,
			nbrs: new Set(),
		};
	}
	componentDidMount() {
		fetch(finalURL)
			.then(response => response.json())
			.then(responseJson => {
				const resultyt = responseJson.items.map(
					obj =>
						'https://www.youtube.com/embed/' +
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
			// Once set is full, clear it
			if (this.state.nbrs.size === this.state.resultyt.size) {
				this.state.nbrs.size.clear();
			}

			let res = Math.floor(Math.random() * result);
			let currentSize = this.state.nbrs.size;
			if (!this.state.nbrs.has(res)) {
				this.state.nbrs.add(res);
			} else {
				do {
					res = Math.floor(Math.random() * result);
					this.state.nbrs.add(res);
				} while (
					this.state.nbrs.size === currentSize &&
					this.state.nbrs.size < result
				);
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
					<h4 class="instruction">Press a button to generate.</h4>
					<button
						class="learn-more"
						onClick={() => this.handleClick()}
					>
						<div class="circle">
							<span class="icon arrow"></span>
						</div>
						<p class="button-text">Song</p>
					</button>
				</div>
			</div>
		);
	}
}

export default Youtube;
