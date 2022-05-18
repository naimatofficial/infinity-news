import React, { Component } from "react";

export default class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl, author, date, source } =
			this.props;

		return (
			<div>
				<div className="card">
					<img
						className="card-img-top"
						src={
							!imageUrl
								? "https://www.army-technology.com/wp-content/uploads/sites/3/2019/09/shutterstock_1141257410_1.1024_0_1-e1567526758455.jpg"
								: imageUrl
						}
						alt="Card image cap"
					/>
					<div className="card-body">
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{source}
						</span>
						<h5 className="card-title" style={{ fontWeight: "700" }}>
							{title}
						</h5>
						<p className="card-text">{description}</p>
						<p className="card-text my-0">
							By{" "}
							<span style={{ fontWeight: "600" }} className="mx-1">
								{author ? author : "Unknown"}
							</span>
						</p>
						<p>
							<small className="text-muted">
								on {new Date(date).toGMTString()}
							</small>
						</p>
						<a
							href={newsUrl}
							className="btn btn-dark"
							target="_blank"
							rel="noreferrer"
						>
							More details
						</a>
					</div>
				</div>
			</div>
		);
	}
}
