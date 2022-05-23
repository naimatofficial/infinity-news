import React from "react";
import icon from "../infinity-icon.png";
import { Link } from "react-router-dom";
const NavBar = () => {
	// const stickHeader = () => {};
	return (
		<div>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/" style={{ fontWeight: "700" }}>
						<img
							src={icon}
							alt="infinity logo"
							style={{ width: "40px" }}
							className="mx-2"
						/>
						Infinity News
					</Link>
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
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/business">
									Business
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/entertainment">
									Entertainment
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/general">
									General
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/health">
									Health
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/science">
									Science
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/sports">
									Sports
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/technology">
									Technology
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
