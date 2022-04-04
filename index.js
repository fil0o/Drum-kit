// Вешаем обработчик клика на группу с кнопками
document.querySelector('.set').addEventListener('click', function (ev) {
		// Проверям нажатие на инструмент
		if(ev.target.classList.contains('key')) {
				// передаем символ нажатой кнопки
				makeSound(ev.target.innerText);
				makeAnimation(ev.target.innerText);
		}
})


// Вешаем обработкчик на нажатие клавиши
document.addEventListener('keydown', function(ev) {
	// передаем код нажатой клавиши
	makeSound(ev.key);
	makeAnimation(ev.key);
})


// Функция для воспроизведения звука
function  makeSound(key) {
	switch (key) {
		case 'w':
				var wkey = new Audio('sounds/tom-1.mp3');
				wkey.play();
				break;

		case 'a':
				var akey = new Audio('sounds/tom-2.mp3');
				akey.play();
				break;

		case 's':
				var skey = new Audio('sounds/tom-3.mp3');
				skey.play();
				break;

		case 'd':
				var dkey = new Audio('sounds/tom-4.mp3');
				dkey.play();
				break;

		case 'j':
				var jkey = new Audio('sounds/snare.mp3');
				jkey.play();
				break;

		case 'k':
				var kkey = new Audio('sounds/crash.mp3');
				kkey.play();
				break;

		case 'l':
				var lkey = new Audio('sounds/kick-bass.mp3');
				lkey.play();
				break;
		default: console.log('Что то пошло не по плану!+_+');
}
}

// Функция для анимации нажатия на кнопки
function makeAnimation(keyDown) {
	const activeBtn = document.querySelector(`.${keyDown}`);

	if (activeBtn !== null) {
		activeBtn.classList.add('pressed');

		setTimeout(function (){
			activeBtn.classList.remove('pressed');
		}, 100)
	}
	
}