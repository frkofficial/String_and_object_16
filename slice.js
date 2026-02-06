const address = 'halishohor';
const part = address.slice(2,5);

console.log(part);



// split system -1
const sentence = "I am a very attentive student";
console.log(sentence.split(' '))


// split system -2
const name = " omar shova naima faruk akram";
console.log(name.split('a'));

// split system -3

const jela = 'ctg rajshahi bogra ragpur dhaka dinaspur'

console.log(jela.split(','))


// join

const friends = ['frk', 'srk', 'karim', 'rahim', 'ratul'];

console.log(friends.join());
console.log(friends.join('|'));
console.log(friends.join('-'));


// concate 

const first = 'Omar';
const last = 'faruk';

const fullname = first.concat(' ').concat(last);
console.log(fullname)

// includes --->specific kichu  khuje dekhaa

console.log(last.includes('r'));
