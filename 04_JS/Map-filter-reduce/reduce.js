function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log(prev);
        console.log(current);
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));
console.log('-----------------');

const lista = [
    {
        nome: 'sabão em pó',
        preco: 30
    },
    {
        nome: 'ceral',
        preco: 12
    },
    {
        nome: 'toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log("rodada", index + 1)
        console.log({prev})
        console.log({current})
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
