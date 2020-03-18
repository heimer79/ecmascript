const obj = {
    name: 'oscar',
    age: 32,
    country: 'mx'
};

// let { name, ...all } = obj;
// console.log(name, all);

/* me sirve para extraer el dato qeu no necesito en el caso de abajo extraigo a country del resto*/

let { country, ...all } = obj;
console.log(all);


//unir elementos de un objeto con otro
const obj = {
    name: 'Oscar',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World') // setTimeout( () => resolve('Hello World), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'));


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20');

const year = match[1]

const month = match[2]

const day = match[3]

console.log(year, month, day);



