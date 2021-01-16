const MIN = 0;
const MAX = 5000;

var lowerSlider = document.querySelector('#lower'),
upperSlider = document.querySelector('#upper'),
lowerVal = parseInt(lowerSlider.value);
upperVal = parseInt(upperSlider.value);

let val = Number(((upperSlider.value - MAX) * 100) / (MAX - MIN));
document.querySelector('.price-range__price_upper').style.left = val + "%";

upperSlider.oninput = function() {
	lowerVal = parseInt(lowerSlider.value);
	upperVal = parseInt(upperSlider.value);

	if (upperVal < lowerVal + 4) {
		lowerSlider.value = upperVal - 4;
		
		if (lowerVal == lowerSlider.min) {
			upperSlider.value = 4;
		}
	}

	let newVal = Number(((upperSlider.value - MAX) * 100) / (MAX - MIN));
	document.querySelector('.price-range__price_upper .price__sum').innerText = upperSlider.value;
	document.querySelector('.price-range__price_upper').style.left = newVal + "%";
};


lowerSlider.oninput = function() {
	lowerVal = parseInt(lowerSlider.value);
	upperVal = parseInt(upperSlider.value);

	if (lowerVal > upperVal - 4) {
		upperSlider.value = lowerVal + 4;
		
		if (upperVal == upperSlider.max) {
			lowerSlider.value = parseInt(upperSlider.max) - 4;
		}
	}

	let newVal = Number(((lowerSlider.value - MIN) * 100) / (MAX - MIN));
	document.querySelector('.price-range__price_lower .price__sum').innerText = lowerSlider.value;
	document.querySelector('.price-range__price_lower').style.left = newVal + "%";
};