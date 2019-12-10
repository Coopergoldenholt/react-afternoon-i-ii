import React, { Component } from "react";
import data from "./data";
import Buttons from "./Buttons";
import "../CSS/nav.css";

class Functionality extends Component {
	constructor() {
		super();
		this.state = {
			index: 0
		};
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.delete = this.delete.bind(this);
	}

	next() {
		if (this.state.index >= 24) {
			this.setState({
				index: 0
			});
		} else
			this.setState({
				index: this.state.index + 1
			});
	}

	previous() {
		if (this.state.index <= 0) {
			this.setState({
				index: data.length - 1
			});
		} else {
			this.setState({
				index: this.state.index - 1
			});
		}
	}

	delete(element, index) {
		data.splice(0, 1);
		console.log("string");
	}

	render() {
		return (
			<div className="body">
				<nav className="nav-bar">
					<div className="home">Home</div>
				</nav>
				<div className="display">
					<div className="display-text">
						<p className="number">{this.state.index + 1}/25</p>
						<h1 className="name">
							{`${data[this.state.index].name.first} ${
								data[this.state.index].name.last
							}`}
						</h1>

						<p className="from">
							<b>From:</b>{" "}
							{`${data[this.state.index].city}, ${
								data[this.state.index].country
							}`}
						</p>
						<p className="job">
							<b>Job Title:</b> {`${data[this.state.index].title}`}
						</p>
						<p className="employer">
							<b>Employer:</b> {`${data[this.state.index].employer}`}
						</p>
						<p className="favorite-movies">
							<b>Favorite Movies:</b>
						</p>
						<ol className="order-list">
							<li className="list-one">{`${
								data[this.state.index].favoriteMovies[0]
							}`}</li>
							<li>{`${data[this.state.index].favoriteMovies[1]}`}</li>
							<li>{`${data[this.state.index].favoriteMovies[2]}`}</li>
						</ol>
					</div>
				</div>
				<Buttons
					next={this.next}
					previous={this.previous}
					delete={this.delete}
					data={data}
				/>
			</div>
		);
	}
}

export default Functionality;
