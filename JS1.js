
const calcularValorHora = () => {

let faturamentomes = document.getElementById("faturamentomes").value
let horas = document.getElementById("horas").value
let dias = document.getElementById("dias").value
let ferias = document.getElementById("ferias").value

const multiplicacao = (a , b) => a * b
const divisao = (a , b) => a / b
const subtracao = (a , b) => a - b

let horasnomes = parseInt (multiplicacao (4.3 , multiplicacao (dias , horas)))
let horasnomessemferias = parseInt (subtracao (horasnomes, divisao (multiplicacao(ferias, multiplicacao (horas , dias)) , 12) ))
let faturamentodia = parseInt (divisao (faturamentomes , horasnomessemferias))

let Resposta = document.getElementById("Resposta")
Resposta.innerText = "O custo da sua hora de trabalho a ser cobrado é de R$" + faturamentodia + ",00."

}

const calcularValorProjeto = () => {

let faturamentohora = document.getElementById("faturamentohora").value
let horasproj = document.getElementById("horasproj").value
let diasproj = document.getElementById("diasproj").value
let nomeproj = document.getElementById("nomeproj").value

let geralfaturamentohora
let geralhorasproj
let geraldiasproj

//CONSTRUCTOR
class projeto{
    constructor(geralnomeproj, geralfaturamentohora, geralhorasproj, geraldiasproj) {
        this.geralnomeproj = geralnomeproj;
        this.geralfaturamentohora = geralfaturamentohora;
        this.geralhorasproj = geralhorasproj;
        this.geraldiasproj = geraldiasproj;
        }
    calcularprecoproj(){
        this.precoproj = this.geralfaturamentohora*this.geralhorasproj*this.geraldiasproj;
    }
}

const projetopadrao = new projeto("Projeto Padrão", 100, 8, 10);
const projetobarato = new projeto("Projeto Baixo Custo", 50, 8, 10);
const projetocaro = new projeto("Projeto Alto Custo", 250, 8, 10);
const projeto1 = new projeto(nomeproj, faturamentohora, horasproj, diasproj);

projeto1.calcularprecoproj();
projetopadrao.calcularprecoproj();

alert ("Seu projeto custará R$" + projeto1.precoproj + ",00. Em comparação, o projeto padrão levantado por aqui, considerando um faturamento diário de R$100,00 e 10 dias de trabalho com 8 horas trabalhadas custará R$" + projetopadrao.precoproj + ",00")

//STORAGE
const ProjetoJSON = JSON.stringify(projeto1) 

localStorage.setItem("ProjetoUsuario", ProjetoJSON);


//ARRAY
const arrayprojetos = [
    "Projeto Padrão",
    "Projeto Baixo Custo",
    "Projeto Alto Custo",
    nomeproj
]
arrayprojetos.sort();

alert ("Atualmente, na lista de projetos, temos " + arrayprojetos.length + " projetos. Os nomes dos projetos, em ordem alfabética, aparecerão a seguir.")

for (let j = 0; j < arrayprojetos.length; j++) {
    alert (arrayprojetos[j])
}

let nomeachecar = (prompt("Digite o nome do projeto que deseja consultar:"))

//FUNÇÕES
const resultadocheck = arrayprojetos.find((o) => o === nomeachecar)

// if (resultadocheck === nomeachecar) {
//    alert ("O nome consultado consta na lista!")
// }
//
// if (resultadocheck === undefined) {
//     alert ("O nome consultado não consta na lista.")
// }

//OPERADOR AVANÇADO
resultadocheck === nomeachecar ? alert ("O nome consultado consta na lista!") : alert ("O nome consultado não consta na lista.")

}

//EVENTOS

function FormEnviado (e) {
    e.preventDefault();
    console.log("Informações para cálculo de valor/hora enviadas")
}

let FormValorHora = document.getElementById("FormValorHora")
FormValorHora.addEventListener("submit", FormEnviado)

//JSON E STORAGE
const VerProjetoAnterior = () => {

let valorLocalStorage= localStorage.getItem("ProjetoUsuario");
const valorLocalStorageObj = JSON.parse(valorLocalStorage)

let nomeproj = valorLocalStorageObj.geralnomeproj
let faturamentohora = valorLocalStorageObj.geralfaturamentohora
let horasproj = valorLocalStorageObj.geralhorasproj
let diasproj = valorLocalStorageObj.geraldiasproj

precoProjStorage = faturamentohora*horasproj*diasproj

//alert ("Seu projeto salvo, chamado de " + nomeproj + ", custará R$" + precoProjStorage + ",00. O cálculo considerou um faturamento por hora de R$" + faturamentohora + ",00 e " + diasproj + " dias sendo trabalhados com " + horasproj + " horas diárias.");

Swal.fire ({
    icon: "info",
    title: "Projeto Salvo",
    text: "Seu projeto salvo, chamado de " + nomeproj + ", custará R$" + precoProjStorage + ",00. O cálculo considerou um faturamento por hora de R$" + faturamentohora + ",00 e " + diasproj + " dias sendo trabalhados com " + horasproj + " horas diárias."
})

}

//FETCH

const apiKey = 'AIzaSyBxdyZ1nCCGBHrMRAY-DFW1L5KNXIsED5Q';
const theme = 'freelancer front-end no Brasil'; 

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${theme}&part=snippet&maxResults=10&type=video`)
  .then(response => response.json())
  .then(data => {
    const videoId = data.items[0].id.videoId;
    const playerDiv = document.getElementById('player');
    const iframe = document.createElement('iframe');
    iframe.width = '640';
    iframe.height = '360';
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.frameborder = '0';
    playerDiv.appendChild(iframe);
    
    const videoIdInput = document.getElementById('videoIdInput');
    videoIdInput.value = videoId;
    
    playerDiv.dataset.videoId = videoId;
  })
  .catch(error => {
    console.error(error);
  });