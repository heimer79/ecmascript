const data = {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);


//pasar valores de un objeto a un arreglo de strings
const data = {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data);

console.log(values);
console.log(values.length);

// agregar cadena a otra al inicio y al final
const string = 'hello';

console.log(string.padStart(8, 'hi '));

console.log(string.padEnd(12, ' ---------'));

console.log('food'.padEnd(12, '   -----'));

const obj = {
    name: 'oscar',
}