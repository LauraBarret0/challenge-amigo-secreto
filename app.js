let amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;
    if(nomeAmigo === ''){
        alert('Por favor, insira um nome.')
    }else{
        amigos.push(nomeAmigo);
        limpaInput();
        console.log(amigos);
    }
}

function limpaInput(){
    let inputNome = document.getElementById('amigo');
    inputNome.value= '';
}