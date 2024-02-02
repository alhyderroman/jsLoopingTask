let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

let count=0;
for(let i in myObject){
    count++;
}
console.log(count);