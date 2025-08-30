document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const questionText = document.querySelector('h1');
    const buttonsContainer = document.querySelector('.buttons');

    noButton.addEventListener('click', () => {
        let currentYesWidth = yesButton.offsetWidth;
        let currentYesHeight = yesButton.offsetHeight;

        yesButton.style.width = (currentYesWidth * 1.2) + 'px';
        yesButton.style.height = (currentYesHeight * 1.2) + 'px';
    });

    yesButton.addEventListener('click', () => {
        questionText.textContent = 'Tebrikler, artık sevgiliyiz!';
        buttonsContainer.style.display = 'none';
    });
});