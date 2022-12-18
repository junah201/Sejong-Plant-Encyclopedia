function openPopup(PlantName) {
	closePopup();
	const popup = document.getElementById("popup");
	popup.style.display = "block";
	popup.style.opacity = 1;
	popup.style.pointerEvents = "auto";
	popup.style.backgroundColor = "white";

	const popupTitle = createElement("h1", { class: "popup-title" });
	popupTitle.innerText = PlantName;

	const popupContainerDiv = createElement("div", {
		class: "popup-container",
	});

	const popupImgContainer = createElement("div", {
		class: "popup-img-container",
	});

	const popupImg = createElement("img", {
		class: "popup-img",
		src: PlantData[PlantName].사진,
	});

	popupImgContainer.append(popupImg);

	const popupDivision = createElement("hr");
	const popupBlank = createElement("br");

	const popupDescription = createElement("p", { class: "popup-description" });
	popupDescription.innerText = `조사자 : ${PlantData[PlantName].조사자}
	과명 : ${PlantData[PlantName].과명}
	학명 : ${PlantData[PlantName].학명}
	속명 : ${PlantData[PlantName].속명}
	종소명 : ${PlantData[PlantName].종소명}
	꽃말 : ${PlantData[PlantName].꽃말}
	위치 : ${PlantData[PlantName].위치}
	`;

	const popupArtContainer = createElement("div", {
		class: "popup-art-container",
	});

	const popupArt = createElement("p", { class: "popup-art" });
	popupArt.innerText = PlantData[PlantName].작품;

	popupArtContainer.append(popupArt);

	const popupCloseButton = createElement("button", {
		class: "popup-close-button",
		onclick: "closePopup()",
	});
	popupCloseButton.innerText = "X";

	popupContainerDiv.append(popupImgContainer, popupDescription);

	popup.append(
		popupTitle,
		popupDivision,
		popupContainerDiv,
		popupBlank,
		popupArtContainer,
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
		style: `top : ${(data.좌표.y * 100) / 1080}%; left :${
			(data.좌표.x * 100) / 1920
		}%;`,
		onclick: `openPopup("${data.이름}")`,
	});

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
		console.log(Plant.이름);
		continue;
	}
	main.prepend(createPlantPreview(Plant));
}
