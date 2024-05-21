document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
        '"The only real failure in life is not to be true to the best one knows."',
        '"You will not be punished for your anger; you will be punished by your anger."',
        '"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."'
    ];

    const quoteElement = document.getElementById('quote');
    const changeQuoteBtn = document.getElementById('changeQuoteBtn');

    changeQuoteBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });

    const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Roboto'];
    const changeFontBtn = document.getElementById('changeFontBtn');

    changeFontBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * fonts.length);
        quoteElement.style.fontFamily = fonts[randomIndex];
    });

    const colors = ['#11302a', '#036264', '#8f5774', '#e0829d', '#dac4d0'];
    const changeBgColorBtn = document.getElementById('changeBgColorBtn');

    changeBgColorBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomIndex];
    });

    const eventDate = new Date('2024-05-26T00:00:00'); 
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        const now = new Date();
        const timeDifference = eventDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = 'Event has started!';
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    const modal = document.getElementById('infoModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
