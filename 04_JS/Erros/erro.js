function validaArr(arr, num) {
    try{
        if(!arr && !num) 
        throw new ReferenceError("Envie os parâmetros");
    
        if(typeof arr !== 'object') 
        throw new TypeError("O elemento precisa ser um Obj");
    
        if(typeof num !== 'number') 
        throw new TypeError("O elemento precisa ser um Num");
    
        if(arr.length !== num) 
        throw new RangeError("Tamanho inválido!");

        return arr
    } catch (e) {
        if(e instanceof ReferenceError) {
            console.log("ReferenceError");
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("TypeError");
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("RangeError");
            console.log(e.message);
        } else{
            console.log('Erro' + e);
        }
    }
}

console.log(validaArr());
console.log('1----------------');
console.log(validaArr(1));
console.log('2----------------');
console.log(validaArr([], 'w'));
console.log('3----------------');
console.log(validaArr([], 5));
console.log('4----------------');
console.log(validaArr([1, 2, 3, 4, 5], 5));