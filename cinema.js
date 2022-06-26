let cinema = 'Villa-lobos';
let catalogo = [];
let filmeExemplo = { 
    codigo: 2232,
    titulo: 'Titanic',
    duracao: 121,
    atores: ['Leonardo diCaprio', 'Kate Winslet'],
    anoDeLancamento: 1999,
    emCartaz: false
} //Exemplo de filme para testagem

let adicionarFilme = (filme, catalogo) => {
    catalogo.push(filme)
} //Função de adição de filme ao catálogo

let buscarFilme = (codigoFilme, catalogo) => {
    console.log(catalogo.find(elemento => elemento.codigo = codigoFilme))
} //Função de busca pelo filme através do código do filme

let alterarStatusEmCartaz = (codigoFilme, catalogo) => {
    let filmeEspecifico = catalogo.find(elemento => elemento.codigo = codigoFilme)
    filmeEspecifico.emCartaz == true ? filmeEspecifico.emCartaz = false : filmeEspecifico.emCartaz = true;
} //Função que altera o Booleano da propriedade "em Cartaz" do filme


adicionarFilme(filmeExemplo, catalogo);
console.log(catalogo);
buscarFilme(2232, catalogo);
alterarStatusEmCartaz(2232, catalogo);
console.log(catalogo);
