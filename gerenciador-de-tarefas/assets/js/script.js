function atualizarContadorTarefas() {
    const listaTarefas = document.querySelectorAll('#listaTarefas li');
    const tarefasConcluidas = document.querySelectorAll('#listaTarefas li.concluida');
    const contadorTarefas = document.getElementById('contadorTarefas');
    contadorTarefas.textContent = `${tarefasConcluidas.length}/${listaTarefas.length}}`;
}


function adicionarTarefa() {

    // iconeTarefa.textContent = 'ok'
    //iconeTarefa.className = 'icone-tarefa'

    const campoTarefa = document.getElementById('campoTarefa');
    const textoTarefa = campoTarefa.ariaValueMax.trim();

    if (textoTarefa ===  ''){
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const listaTarefas = document.getElementById('listaTarefas');
    const itemTarefa = document.createElement('li');

    const conteudoTarefa = document.createElement('span');
    conteudoTarefa.className = 'conteudo-tarefa';

    const iconeTarefa = document.createElement('span');

    const textoTarefaSpan = document.createElement('span');
    textoTarefaSpan.textContent = textoTarefa;

    conteudoTarefa.appendChild(iconeTarefa);
    conteudoTarefa.appendChild(textoTarefa);

    itemTarefa.appendChild(conteudoTarefa);

    itemTarefa.onclick() = () => {
        itemTarefa.classList.toggle('concluida');
        atualizarContadorTarefas();
    }
}