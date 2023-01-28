/*This program will show you how to create a class will only run the basics 
*of creating a class. The name of our class will be train.
*In this exercie we will also perform class inheritence
*/

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
   toggleLights() {
    this.lightsOn =! this.lightsOn;
   } 
   lightsStatus() {
    console.log('Lights on? ', this.lightsOn);
   }
   getSelf() {
    console.log(this);
   }
   getPrototype() {
    let proto = Object.getPrototypeOf(this);
    console.log(proto);
   }
}

let trian1 = new Train('blue', false);
trian1.toggleLights();
trian1.lightsStatus();
trian1.getSelf();
trian1.getPrototype();
