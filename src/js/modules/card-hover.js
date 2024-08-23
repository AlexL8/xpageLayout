const cardOne = document.getElementById("cardOne");
const cardTwo = document.getElementById("cardTwo");
const cardThree = document.getElementById("cardThree");

const cardImg1 = document.getElementById("cardImg1");
const cardImg2 = document.getElementById("cardImg2");
const cardImg3 = document.getElementById("cardImg3");

const cardTitle1 = document.getElementById("cardTitle1");
const cardTitle2 = document.getElementById("cardTitle2");
const cardTitle3 = document.getElementById("cardTitle3");

const cardDescr1 = document.getElementById("cardDescr1");
const cardDescr2 = document.getElementById("cardDescr2");
const cardDescr3 = document.getElementById("cardDescr3");

const cardBtn1 = document.getElementById("cardBtn1");
const cardBtn2 = document.getElementById("cardBtn2");
const cardBtn3 = document.getElementById("cardBtn3");

function toggleStyle(e, card, img, title, descr, btn) {
	if (e.type === "mouseover") {
		card.classList.add("card-hover");
		img.classList.add("card__image-hover");
		title.classList.add("card__title-hover");
		descr.classList.add("card__description-hover");
		btn.style.display = "flex";
	} else if (e.type === "mouseout") {
		card.classList.remove("card-hover");
		img.classList.remove("card__image-hover");
		title.classList.remove("card__title-hover");
		descr.classList.remove("card__description-hover");
		btn.style.display = "none";
	}
}

cardOne.addEventListener("mouseover", (e) => toggleStyle(e, cardOne, cardImg1, cardTitle1, cardDescr1, cardBtn1));
cardOne.addEventListener("mouseout", (e) => toggleStyle(e, cardOne, cardImg1, cardTitle1, cardDescr1, cardBtn1));

cardTwo.addEventListener("mouseover", (e) => toggleStyle(e, cardTwo, cardImg2, cardTitle2, cardDescr2, cardBtn2));
cardTwo.addEventListener("mouseout", (e) => toggleStyle(e, cardTwo, cardImg2, cardTitle2, cardDescr2, cardBtn2));

cardThree.addEventListener("mouseover", (e) => toggleStyle(e, cardThree, cardImg3, cardTitle3, cardDescr3, cardBtn3));
cardThree.addEventListener("mouseout", (e) => toggleStyle(e, cardThree, cardImg3, cardTitle3, cardDescr3, cardBtn3));
