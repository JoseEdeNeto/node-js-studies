function printstuff(stuff){
    console.log(stuff);
}

function mainfunction(anotherfunction, value){
    anotherfunction(value);
}

mainfunction(printstuff, 'Hello World');

var printstuff = stuff => console.log(stuff);


mainfunction(printstuff, 'World Hello');

mainfunction(function(stuff){console.log(stuff);}, 'Horld Wello');