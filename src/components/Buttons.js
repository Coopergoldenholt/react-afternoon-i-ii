import React, { Component } from "react";
import "../CSS/nav.css";

class Buttons extends Component {
	render() {
		return (
			<div className="buttons">
				<button
					className="button-one"
					onClick={() => {
						this.props.previous();
					}}
				>
					{`< Previous`}
				</button>
				<button
					className="button-two"
					onClick={() => {
						this.props.next();
					}}
				>
					Next >
				</button>
				<button className="delete" onClick={() => this.props.delete()}>
					Delete
				</button>
			</div>
		);
	}
}

export default Buttons;
