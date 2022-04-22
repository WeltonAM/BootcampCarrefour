const meuArr = ['Juliana', 'Karla', 'Cecília', 6, 8, 9];

function valoresUnicos(arr){
    const mySet = new Set(arr)

        return [...mySet];
}

console.log(valoresUnicos(meuArr))