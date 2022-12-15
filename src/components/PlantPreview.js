import React from "react";
import "./PlantPreview.css";
import 매화 from "../img/매화.png";

const PlantPreview = (props) => {
	return (
		<button
			className="Plant-preview"
			style={{
				top: props.위치.y,
				left: props.위치.x,
			}}
			onClick={props.OpenPopup}
		>
			<div className="Plant-preview-image">
				<img src={매화} alt="plant" />
			</div>
		</button>
	);
};

export default PlantPreview;
