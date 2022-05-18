import React, { Component } from "react";
import icon from "../infinity-icon.png";

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<a className="navbar-brand" href="/" style={{ fontWeight: "700" }}>
							<img
								src={icon}
								alt="infinity logo"
								style={{ width: "40px" }}
								className="mx-2"
							/>
							Infinity
							<span
								style={{
									background:
										"linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)",
								}}
								className="mx-2 p-1"
							>
								News
							</span>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="/">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/business">
										Business
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/entertainment">
										Entertainment
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/general">
										General
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/health">
										Health
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/science">
										Science
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/sports">
										Sports
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/technology">
										Technology
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
