var age = 100;
if (age >= 65) {
    console.log('You get your income from your pension')
}
else if (age < 65 && age >= 18) {
    console.log('Each month you get a salary')
}   
else if (age < 18) {
    console.log("You get an allowance")
}   
else {
    console.log("The value of the age variable is not numerical");
}


var day = 'Sunday';
switch (day) {
    case 'Monday':
        console.log('Write a report');
        break;
    case 'Tuesday':
        console.log('Pizza night');
        break;
    case 'Wednesday':
        console.log('Night out with friends');
        break;
    case 'Thursday':
        console.log('Game night');
        break;
    case 'Friday':
        console.log('Chill out and reflect');
        break;
    case 'Saturday':
        console.log('Rest');
    case 'Sunday':
        console.log('Go to church');
        break;
    default:
        console.log('There is no such day');
}
