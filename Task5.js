let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

for (let key in myObject) {
    console.log('Key:'+key+ '|Type: '+ typeof myObject[key]);
  }