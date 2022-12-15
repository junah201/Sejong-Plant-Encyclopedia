import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import PlantPopup from "./components/PlantPopup";
import PlantPreview from "./components/PlantPreview";
import { PlantData } from "./components/PlantData";

function App() {
	const 위치_데이터 = [
		{ x: 120, y: 250 },
		{ x: 375, y: 250 },
		{ x: 920, y: 250 },
		{ x: 1000, y: 250 },
		{ x: 1200, y: 250 },
		{ x: 80, y: 780 },
		{ x: 280, y: 850 },
		{ x: 750, y: 900 },
		{ x: 1000, y: 850 },
		{ x: 1060, y: 920 },
		{ x: 1150, y: 820 },
		{ x: 1380, y: 910 },
		{ x: 1470, y: 340 },
		{ x: 1540, y: 340 },
		{ x: 1610, y: 340 },
		{ x: 1770, y: 340 },
		{ x: 1810, y: 500 },
	];

	const ClosePopup = () => {
		console.log("close");
	};

	const clickHandler = () => {
		console.log("123123");
	};

	return (
		<div className="App" onClick={clickHandler}>
			<Header />
			{위치_데이터.map((item) => {
				return (
					<PlantPreview
						data={PlantData.체육관앞}
						위치={item}
						OpenPopup={() => {
							console.log("open");
						}}
					/>
				);
			})}
			<PlantPopup
				data={PlantData.체육관앞[0]}
				IsVisible={true}
				ClosePopup={ClosePopup}
			/>
		</div>
	);
}

export default App;
