import React from "react";
import "./PlantArea.css";

const PlantArea = (props) => {
	const clickHandler = () => {
		console.log("123123");
		props.onSelected();
	};

	return (
		<button
			className="Plant-area"
			style={{
				top: props.StartY,
				left: props.StartX,
				width: props.EndX - props.StartX,
				height: props.EndY - props.StartY,
				pointerEvents: "none",
			}}
			onClick={() => clickHandler()}
		>
			{props.area}
		</button>
	);
};

export default PlantArea;
