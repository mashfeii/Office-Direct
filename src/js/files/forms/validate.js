//* Валидцаия форм
import JustValidate from 'just-validate';
import { flsModules } from '../modules.js';

if (document.querySelector('selector')) {
	const validation = new JustValidate('selector');
	validation
		.addField('.input-name', [
			{
				rule: 'minLength',
				value: 2,
				errorMessage: 'Введите не менее 2 символов',
			},
			{
				rule: 'maxLength',
				value: 15,
				errorMessage: 'Введите не более 15 символов',
			},
			{
				rule: 'required',
				value: true,
				errorMessage: 'Введите имя!',
			},
		])
		.addField('.input-tel', [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Телефон обязателен',
			},
			{
				rule: 'function',
				validator: function (cur, item) {
					const phone = item['.input-tel']['elem'].inputmask.unmaskedvalue();
					return phone.length === 10;
				},
				errorMessage: 'Введите корректный телефон',
			},
		])
		.addField('.input-checkbox', [
			{
				rule: 'required',
				errorMessage: '',
			},
		])
		.onSuccess(event => {
			const form = event.target;
			let formData = new FormData(form);
			const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
			const formMethod = form.getAttribute('method')
				? form.getAttribute('method').trim()
				: 'POST';
			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						flsModules.popup.open('#thanks');
					}
				}
			};

			xhr.open(formMethod, formAction, true);
			xhr.send(formData);
			event.target.reset();
		});
}
