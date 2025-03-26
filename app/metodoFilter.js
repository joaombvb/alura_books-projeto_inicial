const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : newFunction(categoria);

    exibirLivrosNaTela(livrosFiltrados);

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotal(livrosFiltrados);
        exibirValorTotalDosLivrosNaTela(valorTotal)
    }
}

function newFunction(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosNaTela(valorTotal) {
    elementoValorTotal.innerHTML = `  
    <section id="valor_total_livros_disponiveis">
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    </section>`;
}