function avaliador(value){
    if(value % 3 == 0 || value % 5 == 0){
        return true;
    } else {
        return false;
    }
}

function sum(avalia){
    let sum = 0;
    for(let i = 0; i < 1000; i++){
        if(avalia(i)){
            sum += i;
        }
    }
    return sum;
}

console.log(sum(avaliador));