function carregarTarefas(tarefas) {
    const lista = document.querySelector("#lista-tarefas");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar
  
    tarefas.forEach((tarefa) => {
      const li = document.createElement("li");
      li.textContent = tarefa;
      adicionarBotoes(li);
      lista.appendChild(li);
    });
  }