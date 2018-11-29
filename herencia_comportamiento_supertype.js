function Animal() { } //constructor
Animal.prototype = { //prototipo  
    constructor: Animal, 
      eat: function() {
              console.log("nom nom nom");
 }
};
let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype);
duck.eat(); 
beagle.eat(); 