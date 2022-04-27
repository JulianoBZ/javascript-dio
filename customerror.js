function pratica(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Sem parâmetros");
        
        if(typeof arr !== 'object') throw new TypeError("Array não é objeto");
    
        if(typeof num !== 'number') throw new TypeError("Número inválido");
    
        if(arr.length !== num) throw new RangeError("Tamanho inválido");

    return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Erro tipo ReferenceError")
            console.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("Erro tipo TypeError")
            console.log(e.message)
        } else if(e instanceof RangeError) {
            console.log("Erro tipo RangeError")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado: "+e)
        }
    }
} 

console.log(pratica([1,2,3],3));

