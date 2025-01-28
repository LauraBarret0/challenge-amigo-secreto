let amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;
    if(nomeAmigo === ''){
        alert('Por favor, insira um nome.')
    }else{
        amigos.push(nomeAmigo);
        limpaInput();
        mostrarListaAmigos();
    }
}

function limpaInput(){
    let inputNome = document.getElementById('amigo');
    inputNome.value= '';
}

function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i=0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length === 0) {
        alert('Adicione seus amigos.');
        return;
    }else{
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        let li = document.createElement('li');
        li.textContent = amigoSecreto;
        resultado.appendChild(li);
    }
}