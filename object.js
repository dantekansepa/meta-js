/* This is a small exercise of object experimentation
In this exercise will be practising creating and modifiying 
objects using the dot notation and the bracket notation
*/

var user = {name: 'Dante', surname:'Kansepa', age: 27,
            country: 'Zimbabwe', city: 'Kwekwe'};
console.log(user);  
// i can add a property to the object using dot notation               
user.tilte = "software engineer";
console.log(user);
// i can also add an object usng the bracket notation
user['Education'] =  ['Bachelors in Environmental Science', 'SelF-taught'];
user['hobby'] = 'gaming';
console.log(user);
// you can also change an array object property like this
user.Education[1] = 'CS Degree';
console.log(user)