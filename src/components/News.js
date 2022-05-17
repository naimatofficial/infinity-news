import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";

export default class News extends Component {
	constructor() {
		super();
		// set the initial state vlaues
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		};
	}

	async componentDidMount() {
		// this.props.keyword & this.props.apiKey & this.props.pageSize is props are taken from the app.js file
		let url = `https://newsapi.org/v2/everything?q=${this.props.keyword}&from=2022-04-17&sortBy=publishedAt&apiKey=${this.props.apiKey}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=1`;
		this.setState({ loading: true });
		// await (stop for few seconds) it mean fetch the data from api
		let data = await fetch(url);
		let parsedData = await data.json();
		// set the state
		this.setState({
			articles: parsedData.articles,
			totalResult: parsedData.totalResults,
			loading: false,
		});
	}

	handlePreviousClick = async () => {
		console.log("previoius click");
		let url = `https://newsapi.org/v2/everything?q=${
			this.props.keyword
		}&from=2022-04-17&sortBy=publishedAt&apiKey=${this.props.apiKey}&language=${
			this.props.language
		}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			page: this.state.page - 1,
			loading: false,
		});
	};

	handleNextClick = async () => {
		console.log("next click");
		console.log(this.state.totalResults);
		if (
			!(
				this.state.page + 1 >
				Math.ceil(this.state.totalResults / this.props.pageSize)
			)
		) {
			let url = `https://newsapi.org/v2/everything?q=${
				this.props.keyword
			}&from=2022-04-17&sortBy=publishedAt&apiKey=${
				this.props.apiKey
			}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${
				this.state.page + 1
			}`;
			this.setState({ loading: true });

			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				articles: parsedData.articles,
				page: this.state.page + 1,
				loading: false,
			});
		} else {
			console.log("total result is no more!");
		}
	};
	render() {
		return (
			<div className="container my-4 px-5">
				<h1 style={{ fontWeight: "500" }}>Top News Headlines </h1>
				{/* in this case if loading is true then show the Spiner component otherwise hidden it */}
				{this.state.loading && <Spiner />}
				<div className="row ">
					{/* whenever the content is loading then hidden the content otherwise show that */}
					{!this.state.loading &&
						this.state.articles.map((element) => {
							return (
								<div className="col-md-4 my-3" key={element.url}>
									<NewsItem
										title={element.title}
										description={element.description}
										imageUrl={element.urlToImage}
										newsUrl={element.url}
									/>
								</div>
							);
						})}
				</div>
				<div className="row justify-content-around my-4">
					<button
						className="btn btn-dark col-4"
						style={{ width: "200px" }}
						type="button"
						onClick={this.handlePreviousClick}
						disabled={this.state.page <= 1}
					>
						<span className="mx-2">&larr;</span>
						Previous
					</button>
					<button
						className="btn btn-dark col-4"
						style={{ width: "200px" }}
						type="button"
						onClick={this.handleNextClick}
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalResults / this.props.pageSize)
						}
					>
						Next <span className="mx-2">&rarr;</span>
					</button>
				</div>
			</div>
		);
	}
}
