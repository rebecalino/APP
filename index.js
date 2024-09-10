// arrays e objetos 
let meta = {
    value: 'ler um livro todo mês',
    checked: false,
}

let metas = [ 
    meta, 
    {
        value: "caminhar 20 minutos todos os dias",
        checked: true,
    }
]

console.log(metas[0].value);
//ou console.log(meta.value);

console.log(metas[1].value);
// function // arrow function
//const criarMeta = () => {} // para colocar funções (métodos) dentro de um objeto.
//function criarMeta () {} // para funções que não estão dentro do objeto (até esse fundamento!)
