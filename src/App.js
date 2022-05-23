import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import News from "./components/News";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";

const App = () => {
	const apiKey = process.env.REACT_APP_NEWS_API;
	const pageSize = 9;
	const [progress, setProgress] = useState(0);

	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<LoadingBar color="#f11946" progress={progress} />
				<Routes>
					<Route
						exact
						path="/"
						caseSensitive={false}
						element={
							<News
								setProgress={setProgress}
								key="general"
								pageSize={pageSize}
								apiKey={apiKey}
								category="general"
								language="en"
								country="us"
							/>
						}
					/>
					<Route
						exact
						path="/general"
						caseSensitive={false}
						element={
							<News
								setProgress={setProgress}
								key="general"
								pageSize={pageSize}
								apiKey={apiKey}
								category="general"
								language="en"
								country="us"
							/>
						}
					/>
					<Route
						exact
						path="/science"
						caseSensitive={false}
						element={
							<News
								setProgress={setProgress}
								key="science"
								pageSize={pageSize}
								apiKey={apiKey}
								category="science"
								language="en"
								country="us"
							/>
						}
					/>
					<Route
						exact
						path="/business"
						caseSensitive={false}
						element={
							<News
								setProgress={setProgress}
								key="business"
								pageSize={pageSize}
								apiKey={apiKey}
								category="business"
								language="en"
								country="us"
							/>
						}
					/>
					<Route
						exact
						path="/entertainment"
						caseSensitive={false}
						element={
							<News
								setProgress={setProgress}
								key="entertainment"
								pageSize={pageSize}
								apiKey={apiKey}
								category="entertainment"
								language="en"
								country="us"
							/>
						}
					/>
					<Route
						exact
						path="/health"
						caseSensitive={false}
						element={
							<News
								setProgress={setProgress}
								key="health"
								pageSize={pageSize}
								apiKey={apiKey}
								category="health"
								language="en"
								country="us"
							/>
						}
					/>
					<Route
						exact
						path="/sports"
						caseSensitive={false}
						element={
							<News
								setProgress={setProgress}
								key="sports"
								pageSize={pageSize}
								apiKey={apiKey}
								category="sports"
								language="en"
								country="us"
							/>
						}
					/>
					<Route
						exact
						path="/technology"
						caseSensitive={false}
						element={
							<News
								setProgress={setProgress}
								key="technology"
								pageSize={pageSize}
								apiKey={apiKey}
								category="technology"
								language="en"
								country="us"
							/>
						}
					/>
				</Routes>

				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
