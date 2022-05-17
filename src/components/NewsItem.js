import React, { Component } from "react";

export default class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl } = this.props;

		return (
			<div>
				<div className="card" style={{ width: "20rem" }}>
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
						<h5 className="card-title" style={{ fontWeight: "700" }}>
							{title}
						</h5>
						<p className="card-text">{description}</p>
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
