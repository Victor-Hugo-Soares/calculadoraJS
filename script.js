const resultado = document.querySelector(' .result '); //criando a constante sendo a seleção da classe .result do html
const confirmar = document.querySelector(' .igual ');//criando a constante sendo a seleção da classe .igual do html

function insert( valor ){
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = ' ';
}

function backspace() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}

function confirma(){
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}