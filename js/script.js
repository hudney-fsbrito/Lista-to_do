let addTarefa = document.querySelector("#btn-add-Tarefa");
let inputNovaTarefa = document.querySelector("#input-Tarefa");
let listaTarefa = document.querySelector("#lista-Tarefa");
// let nomeTarefa = document.querySelector("#nome-Tarefa");


inputNovaTarefa.addEventListener("keypress", (e) => {
    
    if(e.keyCode == 13){
       let tarefa = {
            nome: inputNovaTarefa.value,
            id:gerarId(),
       }
       criarTarefa(tarefa)
    }
});
addTarefa.addEventListener("click", (e) => {
    
       let tarefa = {
            nome: inputNovaTarefa.value,
            id:gerarId(),
       }
       criarTarefa(tarefa)
});

function gerarId() {
    return Math.floor(Math.random() * 1000);
};

function criarTarefa(tarefa) {
    let li = criarTagLI(tarefa);
    listaTarefa.appendChild(li);
    inputNovaTarefa.value = '';
};

function criarTagLI(tarefa) {
    let li = document.createElement('li');

    let span = document.createElement('span');
    span.classList.add('nome-Tarefa');
    span.innerHTML = tarefa.nome;
    
    let div = document.createElement('div');
    div.classList.add('container-tarefas');

    let btnEditar = document.createElement("button");
    btnEditar.classList.add("edita-Tarefa");
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';

    let btnApagar = document.createElement("button");
    btnApagar.classList.add("exclui-Tarefa");
    btnApagar.innerHTML = '<i class="fa fa-trash"></i>';

    div.appendChild(btnEditar);
    div.appendChild(btnApagar);

    li.appendChild(span);
    li.appendChild(div);
    return li
};