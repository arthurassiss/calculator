let screen = document.getElementById('screen');

function calc(el) {
	screen.innerHTML = screen.innerHTML + el;
}
function calculateResult() {
	let result = eval(screen.innerHTML);
	screen.innerHTML = result;
}
function clearResult() {
	screen.innerHTML = '';
}
