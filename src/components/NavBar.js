import React, { Component } from "react";

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<a className="navbar-brand" href="/" style={{ fontWeight: "700" }}>
							<img
								src="https://cdn2.iconfinder.com/data/icons/flat-ui-free/200/Infinity-Loop.png"
								alt="infinity logo"
								style={{ width: "40px" }}
								className="mx-2"
							/>
							Infinity News
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
									<a className="nav-link" href="/about">
										About
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
