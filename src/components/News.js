import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const updateNews = async () => {
		props.setProgress(10);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c25041d2d20b45d889c70d5c3b575347&sortBy=publishedAt&pageSize=${props.pageSize}&page=${page}&language=${props.language}`;
		// const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-04-22&sortBy=publishedAt&apiKey=97743e31b3c24a5384c666fee905ec42`;

		setLoading(true);
		let data = await fetch(url);
		props.setProgress(30);
		let parsedData = await data.json();
		props.setProgress(70);
		setArticles(parsedData.articles);
		setLoading(true);
		setTotalResults(parsedData.totalResults);

		props.setProgress(100);
	};

	useEffect(() => {
		document.title = `${capitalizeFirstLetter(props.category)} - Infinity News`;
		updateNews();
		// eslint-disable-next-line
	}, []);

	const fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${
			props.country
		}&category=${
			props.category
		}&apiKey=c25041d2d20b45d889c70d5c3b575347&sortBy=publishedAt&pageSize=${
			props.pageSize
		}&page=${page + 1}&language=${props.language}`;
		setPage(page + 1);
		// const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=97743e31b3c24a5384c666fee905ec42`;

		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(articles.concat(parsedData.articles));
		setTotalResults(parsedData.totalResults);
	};

	return (
		<div className="container my-2">
			<h1
				style={{
					fontWeight: "600",
					backgroundColor: "#e11d48",
					borderRadius: "100px",
					boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
					marginTop: "80px",
				}}
				className="py-2 px-4 d-inline-block text-light text-center"
			>
				Top {capitalizeFirstLetter(props.category)} Headlines
			</h1>

			{/* in this case if loading is true then show the Spiner component otherwise hidden it */}
			{!loading && <Spiner />}
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={<Spiner />}
			>
				<div className="container">
					<div className="row">
						{/* whenever the content is loading then hidden the content otherwise show that */}
						{articles.map((element) => {
							return (
								<div className="col-md-4 my-3" key={element.url}>
									<NewsItem
										key={element.category}
										title={element.title}
										description={element.description}
										author={element.author}
										date={element.publishedAt}
										imageUrl={element.urlToImage}
										newsUrl={element.url}
										source={element.source.name}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</InfiniteScroll>
		</div>
	);
};

News.deafultProps = {
	country: "us",
	language: "en",
	pageSize: 8,
	category: "general",
};

News.propsTypes = {
	country: PropTypes.string,
	language: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
};

export default News;
