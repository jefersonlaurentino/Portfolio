import animationScroll from "./animacao.js"
import alertMsg from "./alert.js"

const addLingue = document.querySelector('.linguagens .add');
let tituloLianguagens=[];
let arraylinguagens=[];


const animationElements = () =>{
    const elements =document.querySelectorAll('.offAnimacao');
    elements.forEach((element)=>animationScroll.observe(element));
}

// utilizei o setTimeout porque os cards dos projetos são dinamicos e os cards não da tempo de receber a class 'offAnimacao'
setTimeout(animationElements,1500);


// 
async function skills() {
    try {
        const resposta = await fetch("./src/js/skills.json");
        const json = await resposta.json();
        linguagensConhecimento(json);
    }
    catch (error) {
        console.log(error);
    }
}

skills()

// add skill no site
const linguagensConhecimento = (skill) =>{
    const linguagens = skill;
    for (let i = 0; i < linguagens.length; i++) {
        tituloLianguagens.push(linguagens[i].titulo);
        arraylinguagens.push(linguagens[i]);
        let linguagen = document.querySelector('.lingue').cloneNode(true);
        linguagen.classList.remove('hidden');
        linguagen.querySelector('h3').innerHTML = linguagens[i].titulo;
        linguagen.querySelector('img').src = linguagens[i].img;
        addLingue.appendChild(linguagen);
    }
}

// add projetos no site
const projetos = (projetos) =>{
    const Projeto = projetos;
    for (let i = 0; i < Projeto.length; i++) {
        const card = document.querySelector('.projeto').cloneNode(true);
        card.classList.remove('hidden');
        card.classList.add('offAnimacao');
        card.querySelector('.title').innerHTML = projetos[i].title;
        card.querySelector('.description').innerHTML = projetos[i].description;
        card.querySelector('.btn .bt-1').href = projetos[i].deploy;
        card.querySelector('.btn .bt-2').href = projetos[i].github;
        card.querySelector('.linguagens').innerHTML = linguagensUtilizadas(projetos[i].linguagens);

        // utilizei if para concluded caso esteja trabalhando no projeto mais não finalizado.
        if (projetos[i].concluded) {
            card.querySelector('.tela_pc').style = `background-image: url(${projetos[i].img_pc})`;
            card.querySelector('.tela_celular').style = `background-image: url(${projetos[i].img_cel})`;
        } else {
            card.querySelector('.tela_pc').style = "background-image: url(./src/img/pc-embreve.jpg)";
            card.querySelector('.tela_celular').style ="background-image: url(./src/img/cl-embreve.jpg)";
            card.querySelector('.btn').remove();
        }
        document.querySelector('#projetos').appendChild(card);
    }
}

// função para adisionar img no card de projeto. Para não ficar colocando endereço de img no arquivo JSON dos projetos, faço uma filtragem com os nomes das linguagens.
const linguagensUtilizadas = (linguagens) =>{
    let msg = ``;
    const linguagensProjeto = linguagens;
    linguagensProjeto.forEach((el) => {
        let nome = el.toUpperCase();
        const indexTecnologia = tituloLianguagens.indexOf(nome);
        if (indexTecnologia != -1) {
            msg += `<img src="${arraylinguagens[indexTecnologia].img}" class="w-6">`;
        } else {
            msg += `<i class="fa-solid fa-triangle-exclamation"></i>`
        }
    });
    return msg;
}

document.addEventListener('scroll', () =>{
    let scroll = window.scrollY;
    (scroll <= 730)? document.querySelector('header').classList.add('text-white') : document.querySelector('header').classList.remove('text-white');
    (scroll < 732)? document.querySelector('header').classList.add('text-white') : document.querySelector('header').classList.remove('text-white');
    (scroll >= 500) ? document.querySelector('#arrow').classList.remove('opacity-0') : document.querySelector('#arrow').classList.add('opacity-0');
})

const APIprojetos = async () =>{
    try {
        const url = await fetch('./src/js/projetos.json');
        const resposta = await url.json();
        setTimeout(projetos(resposta),1000);
    } catch (error) {
        console.log(error);
    }
}

APIprojetos()

document.querySelector('#cv').addEventListener('click',()=>alertMsg());