import React from "react";
import "./PlantPopup.css";

const PlantPopup = (props) => {
	return (
		<div
			className="Plant-popup"
			style={{ visibility: props.IsVisible ? "visible" : "hidden" }}
		>
			{props.data.map((item) => (
				<div className="Plant-item-container">
					<div className="Plant-popup-title">{item.이름}</div>
				</div>
			))}
			<button className="Plant-popup-button" onClick={props.ClosePopup}>
				X
			</button>
		</div>
	);
};

export default PlantPopup;
