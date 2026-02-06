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

// keys --- > egula diye bujhai ki ki perameter use kora hocche 

const keys = Object.keys(subject)
console.log(keys)