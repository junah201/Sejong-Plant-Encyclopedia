import React from "react";
import { PlantData } from "./PlantData";
import PlantListItem from "./PlantListItem";

const PlantList = (props) => {
	return (
		<div className="Plant-list">
			<h2 className="Plant-list-title">{props.title}</h2>
			{PlantData[props.area].items.map((item) => (
				<PlantListItem
					이름={item.이름}
					조사자={item.조사자}
					과명={item.과명}
					학명={item.학명}
					종소명={item.종소명}
					꽃말={item.꽃말}
					위치={item.위치}
					문학작품={item.문학작품}
				/>
			))}
		</div>
	);
};

export default PlantList;
