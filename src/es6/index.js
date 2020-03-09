function newFuntion(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'mx';
    console.log(name, age, country);
}


// es6
function newFuntion2(name = 'oscar', age = 32, country = 'mx') {
    console.log(name, age, country);
}

newFuntion2();
newFuntion2('ricardo', '23', 'co');

let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicphrase2 = `${hello} ${world}`;
console.log(epicphrase2);

let lorem = "Nulla deserunt Lorem laborum fugiat velit esse anim occaecat nostrud irure. \n" + "otra frase Irure et ipsum velit duis mollit amet proident Lorem qui nostrud enim ut."


let lorem2 = `otra frase epica 
Sunt officia sint qui elit exercitation dolore.`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'mx'
}

console.log(person.name, person.age);

// ES6
let {
    name, age, country
} = person;

console.log(name, age, country);


let team1 = ['oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['david', ...team1, ...team2];

console.log(education);


{
    var globalVar = "Global Var";
}

{
    // solo se invoca en el bloque que ha sido definido
    let globalLet = "Global Let";
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';
a = 'a'; // no me lo deja ejecutar por ser constante


