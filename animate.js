const slider = document.getElementById('myRange');
const levelOne = document.getElementById('levelOne');
const levelTwo = document.getElementById('levelTwo');
const levelThree = document.getElementById('levelThree');

(function() {
	slider.value = 1;
})();

slider.oninput = function() {
	if (this.value < 40) {
		levelOne.classList.remove('hidden');
		levelTwo.classList.add('hidden');
		levelThree.classList.add('hidden');
	} else if (this.value >= 40 && this.value < 70) {
		levelOne.classList.add('hidden');
		levelTwo.classList.remove('hidden');
		levelThree.classList.add('hidden');
	} else if (this.value >= 70) {
		levelOne.classList.add('hidden');
		levelTwo.classList.add('hidden');
		levelThree.classList.remove('hidden');
	}
};
