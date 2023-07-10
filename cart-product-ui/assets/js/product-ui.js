
import { showToast } from './toast.js';


// ? QUANTIDADE ----------------------
const quantityInput = document.querySelector('.input__quantity');

// * 'quantidade' -- validação, valor máximo 99
const maxValue = 99;
quantityInput.addEventListener('input', function () {
    let value = this.valueAsNumber;
    if (value > maxValue) {
        this.value = maxValue;
    }
});

// * 'quantidade' -- adicionar 0 quando valor é menor que 9
function addZero(input) {
    if (input.value >= 0
        && input.value <= 9
        && input.value.length <= 2) {
        input.value = '0' + input.value;
    }
}
quantityInput.addEventListener('change', () => {
    addZero(quantityInput);
});

// * 'quantidade' -- botão aumentar
const increaseButton = document.querySelector('.quantity__increase');
increaseButton.addEventListener('click', () => {
    if (quantityInput.value < maxValue) {
        quantityInput.value = Number(quantityInput.value) + 1;
        addZero(quantityInput);
    }
});

// * 'quantidade' -- botão diminuir
const decreaseButton = document.querySelector('.quantity__decrease');
decreaseButton.addEventListener('click', () => {
    const currentValue = Number(quantityInput.value);
    if (currentValue > 0) {
        quantityInput.value = currentValue - 1;
        addZero(quantityInput);
    }
});

// ? CORES ----------------------------------------
const colorControls = document.querySelector('.color__controls');
const colorSelected = colorControls.querySelector('.color__selected');
const colorPlaceholder = colorControls.querySelector('.color__placeholder');
const colorList = colorControls.querySelector('.color__list');
const colorOptions = colorControls.querySelectorAll('.color__option');
const colorField = colorControls.querySelector('.color__hiddeninput')

// * 'cores' -- Mostrar as opções
colorSelected.addEventListener('click', () => {
    colorList.classList.toggle('is--open');
})

// * 'cores' -- Fechar as opções
document.addEventListener('click', (e) => {
    if (!colorControls.contains(e.target)) {
        colorList.classList.remove('is--open');
    }
});

// * 'cores' -- Seletor individual
colorOptions.forEach((option) => {
    option.addEventListener('click', () => {
        // * trocar a imagem
        colorPlaceholder.src = option.querySelector('img').src;

        // * MOCK -- dados da cor no formulário via input escondido
        const dataValue = option.getAttribute('data-value');
        colorField.value = dataValue;
        
        // * fechar o dropdown
        colorList.classList.toggle('is--open');
    });
})


// ? EVENTO DO SUBMIT -----------------------------
const form = document.querySelector('.form__minicart');
const cartLoader = document.querySelector('.cart__loader');

// * 'form' -- prevenir o submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // * Se a quantidade de produtos for maior que 0...
    if (parseInt(quantityInput.value) > 0) {
        // * MOCK -- simular o loading
        cartLoader.classList.add('is--loading');
        setTimeout(() => {
            cartLoader.classList.remove('is--loading');
            showToast('Adicionado ao carrinho!');
    
            // * MOCK -- simular update do valor no botão do cart no header
            let cartTag = document.querySelector('.cart__numbers');
            const cartQuantity = parseInt(cartTag.textContent);
            const productsQuantity = parseInt(document.querySelector('.input__quantity').value);
            let newQuantity = cartQuantity + productsQuantity;
            cartTag.textContent = newQuantity;
        }, 1500);
    } else {
        showToast('Selecione a quantidade do produto');
    }
});