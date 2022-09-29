"use strict";


//
// price with spaces
const add_spaces = n => n.toLocaleString('ru');


//
// set data to template
const setData = () => {	
	const data = [
		{
			id: 1,
			name: 'Коптильня 10л',
			price: 1200
		},
		{
			id: 2,
			name: 'Коптильня 20л',
			price: 1400
		},
		{
			id: 3,
			name: 'Коптильня 30л',
			price: 1600
		},
	];

	let items = document.querySelectorAll(".cat .item");
	for (let el of items) {
		let ind = [...el.parentNode.children].indexOf(el);
		el.querySelector(".item__h a").textContent = data[ind].name;
		el.querySelector(".item__price").textContent = add_spaces(data[ind].price) + " руб.";
	}
}


//
// sum of prices
const addToCart = (el) => {
	if(!el.disabled) {
		el.disabled = true;
		el.textContent = "Добавлено";
	}
	let price = el.closest(".item").querySelector(".item__price").textContent;
	price = Number(price.replace(/\D/g, ''));

	let $sum = el.closest(".cat").querySelector(".cat__sum .sum__val");
	let sum = $sum.textContent;
	sum = add_spaces(Number(sum.replace(/\D/g, '')) + price);
	$sum.textContent = sum;
}

let buts = document.querySelectorAll(".cat .item__but");
for (let el of buts) {
	el.addEventListener("click", () => addToCart(el));
}


//
// on dom load 
const ready = () => {
	setData(); // set data to items
}
document.addEventListener("DOMContentLoaded", ready);
