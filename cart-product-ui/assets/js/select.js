// * Um <select> bem legal \o/
// 1 -- A seta gira quando o select ganha foco
// 2 -- A seta volta ao normal quando o select perde o foco (blur)
// 3 -- O select perde o foco automaticamente quando uma opção é selecionada.

const selectStylish = document.querySelector('.selector__element');
const arrow = document.querySelector('.aesthetic__arrow');

selectStylish.addEventListener('focus', () => {
    arrow.classList.add('is--open');
});

selectStylish.addEventListener('blur', () => {
    arrow.classList.remove('is--open');
});

selectStylish.addEventListener('change', () => {
    selectStylish.blur();
});