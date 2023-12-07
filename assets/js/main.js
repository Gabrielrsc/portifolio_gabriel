const abrir = document.querySelector('.open');
const body = document.querySelector('body');
const fechar = document.querySelector('.close');
const abrindo = document.querySelector('nav');
const profissional = document.querySelector('#profissional');
const areasProfissional = document.querySelector('.profissional');
const academico = document.querySelector('#academico');
const areaAcademica = document.querySelector('.academico');
const claro = document.querySelector('.temaClaro');

function openMenu() {
    abrindo.classList.toggle('menuAberto');
    body.classList.toggle('scroll'); // Adiciona ou remove a classe 'scroll' no body
    
}

abrir.addEventListener('click', openMenu);
fechar.addEventListener('click', openMenu)



profissional.addEventListener('click', () => {
    areasProfissional.classList.add('active');
    areaAcademica.classList.remove('active');
    profissional.classList.add('active');
    academico.classList.remove('active');
});

academico.addEventListener('click', () => {
    areasProfissional.classList.remove('active');
    areaAcademica.classList.add('active');
    academico.classList.add('active');
    profissional.classList.remove('active');
});
