const boardArticles = document.querySelectorAll('.article__card');
const boardBackground = document.querySelector('#js--board-background');

boardArticles.forEach((article) => {
    article.addEventListener('mouseover', () => {
        const dataCover = article.getAttribute('data-cover');
        boardBackground.classList.add('effect--fadeout');
        setTimeout(() => {
            boardBackground.src = dataCover;
            boardBackground.classList.remove('effect--fadeout');
        }, 100);
    })
})