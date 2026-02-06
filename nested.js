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

console.log(subject.exam.name_f);
    

// delete

delete subject.s_name

console.log(subject)

// to change in object 

subject.teacher = 'Frk';
subject.chapters[2] = 'fourth'
console.log(subject)
