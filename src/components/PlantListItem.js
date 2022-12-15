import React from "react";

const PlantListItem = (props) => {
	return (
		<div className="Plant-list-item">
			<div className="Plant-list-item-title">{props.title}</div>
			<div className="Plant-list-item-description">{props.description}</div>
		</div>
	);
};

export default PlantListItem;
