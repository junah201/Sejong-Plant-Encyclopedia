import React from "react";
import "./PlantPopup.css";

const PlantPopup = (props) => {
	console.log(props.data);
	return (
		<div className="Plant-popup">
			<h2>{props.data.이름}</h2>
			<br />
			<p>
				조사자 : {props.data.설명}
				<br />
				과명 : {props.data.과명}
				<br />
				종명 : {props.data.종명}
				<br />
				학명 : {props.data.학명}
				<br />
				위치 : {props.data.위치}
				<br />
				문학작품 : {props.data.문학작품}
			</p>
			<button className="Plant-popup-button" onClick={props.ClosePopup}>
				X
			</button>
		</div>
	);
};

export default PlantPopup;
