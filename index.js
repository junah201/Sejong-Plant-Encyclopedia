function openPopup(PlantName) {
	closePopup();
	console.log(PlantName);
	const popup = document.getElementById("popup");
	popup.style.display = "block";
	popup.style.opacity = 1;
	popup.style.pointerEvents = "auto";
	popup.style.backgroundColor = "white";

	PlantData[PlantName];

	popupTitle = createElement("h1", { class: "popup-title" });
	popupTitle.innerText = PlantName;

	popupInvestigator = createElement("h2", { class: "popup-investigator" });
	popupInvestigator.innerText = PlantData[PlantName].조사자;

	popupDivision = createElement("hr");
	popupBlank = createElement("br");

	popupDescription = createElement("p", { class: "popup-description" });
	popupDescription.innerText = `과명 : ${PlantData[PlantName].과명}
	학명 : ${PlantData[PlantName].학명}
	속명 : ${PlantData[PlantName].속명}
	종소명 : ${PlantData[PlantName].종소명}
	꽃말 : ${PlantData[PlantName].꽃말}
	위치 : ${PlantData[PlantName].위치}
	`;

	popupArt = createElement("p", { class: "popup-art" });
	popupArt.innerText = PlantData[PlantName].작품;

	popupCloseButton = createElement("button", {
		class: "popup-close-button",
		onclick: "closePopup()",
	});
	popupCloseButton.innerText = "X";

	popup.append(
		popupTitle,
		popupInvestigator,
		popupDivision,
		popupDescription,
		popupBlank,
		popupArt,
		popupCloseButton
	);
}

function closePopup() {
	const popup = document.getElementById("popup");
	popup.style.display = "none";
	popup.style.opacity = 0;
	popup.style.pointerEvents = "none";
	popup.style.backgroundColor = "rgba(0, 0, 0, 0)";
	popup.innerHTML = "";
}

function createPlantPreview(data) {
	containerDiv = createElement("div", {
		class: "Plant-preview-container",
		style: `top : ${data.좌표.y}px; left : ${data.좌표.x}px;`,
		onclick: `openPopup("${data.이름}")`,
	});

	console.log(data.사진);

	PreviewImg = createElement("img", {
		src: data.사진,
		class: "Plant-preview-img",
	});

	containerDiv.append(PreviewImg);
	return containerDiv;
}

const main = document.getElementById("main");

for (const Plant of Object.values(PlantData)) {
	if (Plant.좌표 == undefined) {
		continue;
	}
	main.prepend(createPlantPreview(Plant));
}
