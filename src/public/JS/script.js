const open2= document.getElementById('open2');
const open= document.getElementById('open');
const modal= document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click',()=>{
    modal.classList.add('show');
});

open2.addEventListener('click',()=>{
    modal.classList.add('show');
});

close.addEventListener('click',()=>{
    modal.classList.remove('show');
});

