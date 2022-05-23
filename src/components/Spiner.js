import React from "react";
import loading from "../loading.gif";

const Spiner = () => {
	return (
		<div
			className="container text-center my-3"
			// style={{ height: "60vh" }}
		>
			<img src={loading} alt="loading" />
		</div>
	);
};

export default Spiner;
