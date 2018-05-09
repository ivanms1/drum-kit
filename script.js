let playAudio = (e) => {
	let key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if(!key) return;
	audio.play();
	audio.currentTime = 0;
	key.classList.add('play');
}

function removeTransition(e) {
	if(e.propertyName != 'transform') return;

	this.classList.remove('play');
}

let keys = document.querySelectorAll('.keys');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playAudio);