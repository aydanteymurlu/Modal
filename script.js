let modalOpen = document.querySelector('#open')
let modal = document.querySelector('.modal')
let modalClose = document.querySelector('#close')
let modalForm = document.querySelector('#form')
let input = document.querySelector('.input')
let login = document.querySelector('.btn-login')
let inputUsername = document.querySelector('#username');
let inputPassword = document.querySelector('#password');

modalOpen.addEventListener('click',function(){
    console.log('click');
    modal.style.display='flex';
})

modalClose.addEventListener('click',function(){
    console.log('click close');
    modal.style.display= 'none';
})


