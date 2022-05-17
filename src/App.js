import "./App.css";
import News from "./components/News";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<News
					pageSize={6}
					apiKey={"d0c5255364ee4e06a074b4985d1c2385"}
					keyword={"computer"}
					language={"en"}
				/>
				<Footer />
			</div>
		);
	}
}
