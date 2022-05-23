import React from "react";
import "../App.css";

const NewsItem = (props) => {
	return (
		<div>
			<div className="card">
				<img
					className="card-img-top"
					src={
						!props.imageUrl
							? "https://www.army-technology.com/wp-content/uploads/sites/3/2019/09/shutterstock_1141257410_1.1024_0_1-e1567526758455.jpg"
							: props.imageUrl
					}
					alt="card-pic"
				/>
				<div
					className="d-flex justify-content-end position-absolute"
					style={{ top: "4px", right: "4px" }}
				>
					<span
						className="badge rounded-pill bg-danger"
						style={{ fontSize: "14px" }}
					>
						{props.source}
					</span>
				</div>
				<div className="card-body">
					<h5 className="card-title" style={{ fontWeight: "700" }}>
						{props.title}
					</h5>
					<p className="card-text">{props.description}</p>
					<p className="card-text my-0 text-danger">
						By{" "}
						<span style={{ fontWeight: "600" }} className="mx-1">
							{props.author ? props.author : "Unknown"}
						</span>
					</p>
					<p className="text-danger">
						<small className="text-muted ">
							on {new Date(props.date).toGMTString()}
						</small>
					</p>
					<a
						href={props.newsUrl}
						className="btn btn-dark mask"
						target="_blank"
						rel="noreferrer"
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
