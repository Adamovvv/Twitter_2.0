let open_modal = document.getElementById('open-story_modal');
let close_modal = document.getElementById('close-story_modal');
let modal = document.getElementById('modal-story');
let body = document.getElementsByTagName('body')[0];
open_modal.onclick = function() { // клик на открытие
	modal.classList.add('modal_vis'); // добавляем видимость окна
	body.classList.add('body_block'); // убираем прокрутку
};
close_modal.onclick = function() { // клик на закрытие
		modal.classList.remove('modal_vis'); 
		body.classList.remove('body_block'); // возвращаем прокрутку
};