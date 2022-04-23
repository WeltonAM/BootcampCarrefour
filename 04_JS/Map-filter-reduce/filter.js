function filtraPares(arr) {
    return arr.filter(callBack);
}

function callBack(item){
    return item % 2 === 0;
}

const meuArr = [1, 2, 3, 4, 40, 57, 9];

console.log(filtraPares(meuArr));