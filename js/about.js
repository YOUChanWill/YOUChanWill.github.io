document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('[data-js="menu-toggle"]');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            document.body.classList.toggle('panel-open');
            menuToggle.classList.toggle('open');
        });
    }
});
