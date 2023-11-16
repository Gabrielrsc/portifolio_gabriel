
const abrir = document.querySelector('.open');
const fechar = document.querySelector('.close');
const Abrindo = document.querySelector('nav');

abrir.addEventListener ('mouseover', function () {
    console.log('Abrindo Menu');
    Abrindo.classList.add('menuAberto');
})

fechar.addEventListener('mouseover', function(){
    Abrindo.classList.remove('menuAberto')
})




// const nav = document.querySelector('#header nav')
// const toggle = document.querySelectorAll('nav .toggle')

// for (const element of toggle) {
//   element.addEventListener('click', function () {
//     nav.classList.toggle('show')
//   })
// }