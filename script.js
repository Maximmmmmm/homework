const emailInput = document.getElementById('2')
const passwordInput = document.getElementById('3')
const formInputs = document.querySelector('.form__inputs')

let nameHint = document.createElement('div');
nameHint.innerHTML = "<p>В дане поле потрібно вписати ім'я користувача</p><p>Наприклад: valeraborov</p>";
nameHint.classList.add('hint');
nameHint.classList.add('name-hint');
nameHint.style.top = '-3%';

let emailHint = document.createElement('div');
emailHint.innerHTML = '<p>Електронна пошта повинна містити знак "@"</p><p>Наприклад: valeraborov@gmail.com</p>';
emailHint.classList.add('hint');
emailHint.style.top = '19%';

let passwordHint = document.createElement('div');
passwordHint.innerHTML = '<p>Пароль повинен містити великі літери та цифри</p><p>Наприклад: ValeraBorov228</p>';
passwordHint.classList.add('hint');
passwordHint.style.top = '40%';

let submutHint = document.createElement('div');
submutHint.innerHTML = "<p>Обов'язково перевірте правильність введених даних</p>";
submutHint.classList.add('hint');
submutHint.classList.add('submit-hint');
submutHint.style.top = '95%';

formInputs.append(nameHint);
formInputs.append(emailHint);
formInputs.append(passwordHint);
formInputs.append(submutHint);

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('email-input')) {
		if (emailInput.value == '') {
			emailHint.classList.add('show');
		} else {
			emailHint.classList.remove('show');
		}
	} else {
		emailHint.classList.remove('show');
	}

	if (e.target.classList.contains('password-input')) {
		if (passwordInput.value == '') {
			passwordHint.classList.add('show');
		} else {
			passwordHint.classList.remove('show');
		}
	} else {
		passwordHint.classList.remove('show');
	}
});

emailInput.addEventListener('input', (e) => {
	if (emailInput.value != '') {
		emailHint.classList.remove('show');
	}
});

passwordInput.addEventListener('input', (e) => {
	if (passwordInput.value != '') {
		passwordHint.classList.remove('show');
	}
});