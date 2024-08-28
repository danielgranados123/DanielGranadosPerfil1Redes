document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector('.hamburguesa');
    const menu = document.querySelector('.menu ul');

    hamburguesa.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
});