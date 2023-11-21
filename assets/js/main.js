
const abrir = document.querySelector('.open');
const body = document.querySelector('body');
const fechar = document.querySelector('.close');
const Abrindo = document.querySelector('nav');
const profissional = document.querySelector('#profissional')
const areasProfissional = document.querySelector('.profissional')
const academico = document.querySelector('#academico')
const areaAcademica = document.querySelector('.academico')

abrir.addEventListener ('mouseover', function () {
    console.log('Abrindo Menu');
    Abrindo.classList.add('menuAberto');
    body.classList.add('scroll')

})

fechar.addEventListener('mouseover', function(){
    Abrindo.classList.remove('menuAberto')
    body.classList.remove('scroll')
})

profissional.addEventListener('click', ()=>{
    areasProfissional.classList.add('active')
    areaAcademica.classList.remove('active')
    profissional.classList.add('active')
    academico.classList.remove('active')
})

academico.addEventListener('click', ()=>{
    areasProfissional.classList.remove('active')
    areaAcademica.classList.add('active')
    academico.classList.add('active')
    profissional.classList.remove('active')
})



// const nav = document.querySelector('#header nav')
// const toggle = document.querySelectorAll('nav .toggle')

// for (const element of toggle) {
//   element.addEventListener('click', function () {
//     nav.classList.toggle('show')
//   })
// }