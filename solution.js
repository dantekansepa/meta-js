// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yoghurt', 'ice cream', 'milkshake'];
function logDiary(arr) {
    for (i of arr) {
        console.log(i);
    }
}
console.log(logDiary(dairy));
console.log('\n')
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(a) {
    for (key of Object.keys(a)) {
        console.log(key, +':' + a[key]);
    }
}
console.log(birdCan(bird));
// Task 3
for (const ani in animal) {
    console.log(`${ani}: ${animal[ani]}`)
}

