export function showToast(message) {
    const toastContainer = document.querySelector('.toast__container');
    const toastElement = document.createElement('span');
    toastElement.classList.add('toast');
    toastContainer.appendChild(toastElement);
    toastElement.textContent = message;
    setTimeout(() => {
        toastElement.remove();
    }, 1600);
}