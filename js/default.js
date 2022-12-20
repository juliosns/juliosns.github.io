window.addEventListener("load", (event) => {
    document.querySelector('#confirm-btn').addEventListener('click', () => {
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.map').style.display = 'none';
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal').style.opacity = 1;
    });

    document.querySelector('#date-btn').addEventListener('click', () => {
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.map').style.display = 'block';
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal').style.opacity = 1;
    });

    document.querySelector('#close-btn').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.modal').style.opacity = 0;
    });
});