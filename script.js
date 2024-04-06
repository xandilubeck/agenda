const form = document.getElementById('registro');

function mascaraTelefone(event) {
    let tecla = event.key;
    let telefone = event.target.value.replace(/\D+/g, "");

    if (/^[0-9]$/i.test(tecla)) {
        telefone = telefone + tecla;
        let tamanho = telefone.length;

        if (tamanho >=12) {
            return false;
        }

        if (tamanho > 10) {
            telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (tamanho > 5) {
            telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (tamanho >2) {
            telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            telefone = telefone.replace(/^(\d*)/, "($1");
        }
        event.target.value = telefone;
    }
    
    if (!["Backspace", "Delete"].includes(tecla)) {
        return false;
    }
}

const nomes = [];
const email = [];
const telefone = [];
const registro = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});

function adicionaLinha() {
    const inputNome = document.getElementById('name');
    const inputEmail = document.getElementById('correio');
    const inputFone = document.getElementById('fone');

if (registro.includes(inputNome.value)) {
    alert(`O nome: ${inputNome.value} já foi inserido`);
} else {
    registro.push(inputNome.value);
    email.push(inputEmail.value);
    telefone.push(inputFone.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += `<td>${inputFone.value}</td> `;
    linha += '</tr>';

    linhas += linha;
}

    inputNome.value = '';
    inputEmail.value = '';
    inputFone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}