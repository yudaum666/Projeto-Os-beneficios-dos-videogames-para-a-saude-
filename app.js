function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class=${dado.descricao}>
                <a href=${dado.link} target="_blank">Clique Aqui Para Saber Mais!</a>
            </p>
        </div>
    `; 
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}