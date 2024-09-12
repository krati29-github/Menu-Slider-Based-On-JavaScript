const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//toggle navigation
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

//show modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal');
});

//hode modal
close.addEventListener('click', () => {
    modale.classList.remove('show-modal');
});

//hide modal outsite 
window.addEventListener('click', (e) => {
    e.target == modal ? modal.classList.remove('show-modal') : false
})