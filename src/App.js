import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import PlantArea from "./components/PlantArea";
import PlantPopup from "./components/PlantPopup";
import { PlantData } from "./components/PlantData";

function App() {
	const [selectedAreas, setSelectedAreas] = useState({
		입구화단: false,
		체육관앞: false,
		주차장: false,
		아파트앞: false,
	});

	const ClosePopup = () => {
		setSelectedAreas({
			입구화단: false,
			체육관앞: false,
			주차장: false,
			아파트앞: false,
		});
	};

	const clickHandler = () => {
		console.log("123123");
	};

	console.log(selectedAreas);

	return (
		<div className="App" onClick={clickHandler}>
			<Header />

			<PlantArea
				area="입구화단"
				StartX={1650}
				StartY={900}
				EndX={1650 + 200}
				EndY={900 + 120}
				onSelected={() => {
					setSelectedAreas(...selectedAreas, { 입구화단: true });
				}}
			/>
			<PlantArea
				area="체육관앞"
				StartX={20}
				StartY={280}
				EndX={150}
				EndY={600}
				onSelected={() => {
					setSelectedAreas(...selectedAreas, { 체육관앞: true });
				}}
			/>
			<PlantArea
				area="주차장"
				StartX={1600}
				StartY={400}
				EndX={1900}
				EndY={850}
				onSelected={() => {
					setSelectedAreas(...selectedAreas, { 주차장: true });
				}}
			/>
			<PlantArea
				area="아파트앞"
				StartX={500}
				StartY={200}
				EndX={1600}
				EndY={300}
				onSelected={() => {
					setSelectedAreas(...selectedAreas, { 아파트앞: true });
				}}
			/>
			<PlantPopup
				data={PlantData.체육관앞}
				IsVisible={selectedAreas.체육관앞}
				onClosed={ClosePopup}
			></PlantPopup>
			<PlantPopup
				data={PlantData.아파트앞}
				IsVisible={selectedAreas.아파트앞}
				onClosed={ClosePopup}
			></PlantPopup>
			<PlantPopup
				data={PlantData.입구화단}
				IsVisible={selectedAreas.입구화단}
				onClosed={ClosePopup}
			></PlantPopup>
			<PlantPopup
				data={PlantData.주차장}
				IsVisible={selectedAreas.주차장}
				onClosed={ClosePopup}
			></PlantPopup>
		</div>
	);
}

export default App;
