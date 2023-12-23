//Selecionando elementos
document.getElementById("radio1").checked = true
let btnCertificado = document.querySelector('.input-file')
const divSlides = document.querySelector('.slides')
const divNavigationAuto = document.querySelector('.navigation-auto')
const divManualNavigation = document.querySelector('.manual-navigation')
//-----------------------------------------------------------------------------


//Váriaveis de controle
let contador = 1;
let nCertificado = 8;
//-----------------------------------------------------------------------------


//Função que faz o slide passar automaticamente a cada 5s
function nextImage(){
    contador++
    if(contador > 7){
        contador = 1;
    }

    document.getElementById(`radio${contador}`).checked = true
} 

setInterval(function(){
    nextImage();
}, 5000)
//-----------------------------------------------------------------------------


//Capturando o evento de change (escolha) do botão de adicionar certificados.
btnCertificado.addEventListener('change', function(e){

    //Aqui uma condicional para que certifique de que tenha menos de 12 certificados antes de executar a função
    if(nCertificado <= 12){

        const certificadoTarget = e.target;
        const file =  certificadoTarget.files[0]

    //Criando um reader para poder ler as imagens escolhidas
        const reader = new FileReader();
        reader.readAsDataURL(file)
    
    //Adicionando um evento ao reader para carregar as imagens em uma url.
        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

    //Criando a imagem
            const img = document.createElement('img');
            img.src = readerTarget.result;

    //Criando a div que a a imagem ficará, e colocando a imagem dentro
            localImg = criaDivImg()
            localImg.appendChild(img)

    //Aqui, se coloca a div com a imagem dentro da div slides.
            divSlides.appendChild(localImg)

    })

   //Condição para que o botão seja criado no inicio da div e não no final, para o código funcionar esse trecho de códigp é essencial
    if(divSlides.firstChild){
        divSlides.insertBefore(criaInput(), divSlides.firstChild)
    } else {
        divSlides.appendChild(criaInput())
    }
    divNavigationAuto.appendChild(criaDivAuto())
    divManualNavigation.appendChild(criaLabelManual())

    } else {
        alert('Número máximo de certficados atingido')
    }

})
//-----------------------------------------------------------------------------


//Um evento para a atualização do número de certficados adicionados, para controle posterior.
btnCertificado.addEventListener('change', function(e){
    nCertificado++
    return nCertificado
})
//-----------------------------------------------------------------------------


//Função que cria um novo input radio, com o numero de certificados sempre atualizado pelo evento acima, para funcionamento do código
function criaInput(){

    inputRadio = document.createElement('input')
    inputRadio.setAttribute('type', 'radio')
    inputRadio.setAttribute('name', 'radio-btn')
    inputRadio.setAttribute('id', 'radio' + nCertificado )
    return inputRadio

}
//-----------------------------------------------------------------------------


//Funções que criam lugares específicos no HTML, aonde vamos adc nossas imagens e botões
function criaDivAuto(){
    
    divAuto = document.createElement('div')
    divAuto.setAttribute('class', 'auto-btn' + nCertificado )
    return divAuto

}

function criaLabelManual(){
    
    label = document.createElement('label')
    label.setAttribute('for', 'radio' + nCertificado )
    label.setAttribute('class', 'manual-btn')
    return label

}

function criaDivImg(){
    
    divImg = document.createElement('div')
    divImg.setAttribute('class', 'slide')
    return divImg
}
//-----------------------------------------------------------------------------