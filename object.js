const name = 'omar'
const id = '21';
const age = '25';

const student = {
    university:'Aiub',
    area:'Kuril',
    subject:'CSE',
    isGood: true
}
// object is NonPrimitive
const subject = {
    s_name: 'Biology',
    teacher : 'Amin',
    examDate: '30 Feb', 
    chapters : ['first', 'second', 'thrid'],

    exam:{
        name_f : 'final exam', 
        marks: 100
    }
}


const person = {
    p_name : 'Omar',
    age:25,
    profession:'developer',
    salary:20000,
    married:true
    'fav palce' : ['sundorban', 'bandarban', 'cox bazar', 'saintmartin']

}
console.log(person)

// dot notation
console.log('Age: ',person.age)
const income = person.salary
console.log('Income: ',income);

person.salary = 35000; 
person['age'] = '26'