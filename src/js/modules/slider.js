const dataSlider = {
	content1: {
		imgUrl: "./images/3.webp",
		title: "Найди с кем поиграть в баскет",
	},
	content2: {
		imgUrl: "./images/2.webp",
		title: "мы собрали секции для детей по всему городу",
	},
	content3: {
		imgUrl: "./images/1.webp",
		title: "Полезные материалы и видеоуроки в нашем приложении",
	},
};

const bcgIMG = document.getElementById("bcgIMG");
const title = document.getElementById("title");
const button1 = document.getElementById("butOne");
const button2 = document.getElementById("butTwo");
const button3 = document.getElementById("butThree");

function handleChangeContent(url, text) {
	bcgIMG.src = url;
	title.textContent = text;
}

button1.addEventListener("mouseover", () => handleChangeContent(dataSlider.content1.imgUrl, dataSlider.content1.title));
button2.addEventListener("mouseover", () => handleChangeContent(dataSlider.content2.imgUrl, dataSlider.content2.title));
button3.addEventListener("mouseover", () => handleChangeContent(dataSlider.content3.imgUrl, dataSlider.content3.title));
