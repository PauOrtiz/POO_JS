function Bird() { 
      let weight=15;//VARIABLE CLOSURE\n  
      this.getWeight = function(){ //MÉTODO\n\n      
          return weight;  };  
          let peso=new Bird(); //CREACIÓN DEL OBJ\npeso.getWeight(); //APLIC DEL MÉTODO\n"
        }