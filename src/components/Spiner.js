import React, { Component } from "react";
import loading from "../loading.gif";

export default class Spiner extends Component {
	render() {
		return (
			<div className="container text-center" style={{ height: "60vh" }}>
				<img src={loading} alt="loading" />
			</div>
		);
	}
}