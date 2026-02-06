const sentence = "I am learning web Dev.";


let reverse = '';
for(const letter of sentence){
    reverse = letter + reverse;
}

console.log(reverse);


for(let i=sentence.length; i>=0; i--){
    console.log(sentence[i]);
}