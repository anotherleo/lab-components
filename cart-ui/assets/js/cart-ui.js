// * FUNÇÕES DAS QUANTIDADES -----------------------------
// * Todos os inputs
const quantityInputs = document.querySelectorAll('.input__items');
quantityInputs.forEach((input) => {
    input.addEventListener('change', () => {
        handleQuantityChange(event);
        updateCartNumbers();
    });
});

// * Todos os botões de quantidade
const quantityButtons = document.querySelectorAll('.quantity__control');
quantityButtons.forEach((button) => {
    button.addEventListener('click', () => {
        handleQuantityChange(event);
        updateCartNumbers();
    });
});

// * Aumentar ou diminuir a quantidade com base na clase do botão
function handleQuantityChange(event) {
    const button = event.target;
    const item = button.closest('.cart__product');
    const input = item.querySelector('.input__items');
    const value = parseInt(input.value);
    const tag = item.querySelector('.tag');

    if (button.classList.contains('button__add')) {
        input.value = value + 1;
        tag.textContent = input.value;
    } else if (button.classList.contains('button__remove')) {
        input.value = Math.max(value - 1, 1);
        tag.textContent = input.value;
    }
}

// * Atualizar o número de itens no carrinho
function updateCartNumbers() {
    const allInputItems = document.querySelectorAll('.input__items');
    const cartNumbers = document.querySelector('.cart__numbers');
    let sum = 0;
    allInputItems.forEach((input) => {
        const value = parseInt(input.value);
        sum += value;
    });
    cartNumbers.textContent = sum.toString();
}

// * FUNÇÕES DELETE ----------------------------------
// * Todos os deletes
const deleteButtons = document.querySelectorAll('.button__delete');
deleteButtons.forEach((button) => {
    button.addEventListener('click', handleDelete);
});

// * Dialog de confirmação do delete e remover item
function handleDelete(event) {
    const dialog = document.querySelector('#delete-confirmation-dialog');
    const dialogClose = document.querySelector('.dialog__close');
    const confirm = dialog.querySelector('#confirm-delete');
    const cancel = dialog.querySelector('#cancel-delete');
    const item = event.target.closest('.cart__product');

    dialog.showModal();

    dialogClose.addEventListener('click', () => {
        dialog.close();
    })

    cancel.addEventListener('click', () => {
        dialog.close();
    })

    confirm.addEventListener('click', () => {
        item.remove();
        updateCartNumbers();
        dialog.close();
    })
}

// * INICIALIZAÇÃO ----------------------------
updateCartNumbers();