const array = [1,2,3,4,5,6];

function esPar(array) {
    let newArray = Array();
    array.forEach(element => {
        if(element%2==0){
            newArray.push(element+' es par');
        }else{
            newArray.push(element+' es impar');
        }
    });
    return newArray
}


console.log(esPar(array))