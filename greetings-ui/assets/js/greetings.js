const body = document.querySelector('body')
const greetingSpan = document.querySelector('#greeting');
const clockSpan = document.querySelector('#clock');

const date = new Date();
const hours = date.getHours().toString().padStart(2, '0');
const minutes = date.getMinutes().toString().padStart(2, '0');
const templateClock = `${hours}:${minutes}`

// * Alterar o horário no check-in
clockSpan.textContent = templateClock;

// * Função pra alterar o background
function newBackground(classCSS) {
    body.className = '';
    body.classList.add(classCSS);
}

// * Greetings
if (hours > 0 && hours <= 5) {
    greetingSpan.textContent = 'Boa madrugada';
    newBackground('background--nightmare');
} else if (hours > 5 && hours <= 12) {
    greetingSpan.textContent = 'Bom dia';
    newBackground('background--day');
} else if (hours > 12 && hours <= 18) {
    greetingSpan.textContent = 'Boa tarde';
    newBackground('background--afternoon');
} else if (hours > 18 && hours <= 23) {
    greetingSpan.textContent = 'Boa noite';
    newBackground('background--nightmare');
} else {
    greetingSpan.textContent = 'Olá';
    newBackground('background--day');
}