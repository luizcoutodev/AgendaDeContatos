const form = document.getElementById("formulario-contato");
const tabela = document.querySelector('tbody');
let Contatos = [];


let linhas = '';

form.addEventListener('submit',function(e){
    
    adicionaLinhas();
    atualizaQuantidade();
    e.preventDefault();

})

function adicionaLinhas(){
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    if (Contatos.includes(inputNumero.value)) {
        alert ("O contato já foi cadastrado");
    } else {
        if (inputNumero.value.length == 11){
            let linha =`<tr>`;
            linha += `<td>${inputNome.value}</td>`
            linha += `<td>${inputNumero.value}</td>`
            linha += `</tr>`

            linhas += linha;
            tabela.innerHTML = linhas;
            Contatos.push(inputNumero.value);
        } else {
            alert('O número está incorreto. Por favor digite um número com DDD + 9 dígitos. Ex: 22997616669')
        }
    }
}

function atualizaQuantidade(){
    let QuantidadeDeContatos = document.getElementById('quantidade-contatos');
    if(Contatos.length == 0){
        QuantidadeDeContatos.innerHTML = `--`
    } else {
        QuantidadeDeContatos.innerHTML = `${Contatos.length}`   
    }
}

