function Forest(name) {
    this.name = name;
    this.bear = new Bear();
    this.animals = [];
    

 

    this.huntingAnimals=function(){
        for (var i=0; i<this.animals.length; i++){
            var animal = this.animals;
            if (animal.type === "wolf"){
                this.bear.currentMass =this.bear.currentMass-(this.bear.currentMass*0.3)+(animal.nutritionValue/2);

            } else if (animal.type === "fox"){
                this.bear.currentMass=this.bear.currentMass-(this.bear.currentMass*0.2 )+(animal.nutritionValue/2);
            } else if (animal.type === "rabbit"){
                this.bear.currentMass=this.bear.currentMass-(this.bear.currentMass*0.1)+(animal.nutritionValue/2);
            }
        }
       console.log(this.bear.currentMass);
    }

    


    this.hunterAlert = function(){
        var random = getRandomNumber(0, 10);
        if (random<0.5){
            this.bear.currentMass -= (this.bear.currentMass * 0.30);

        }  
        //  if(this.bear.totalMass >= 500){
        //      bear.alive = false;
        //      console.log("The bear is dead!");
        //  }
         
    }


    this.generateAnimal = function() {
        for (var index = 0; index < 10; index++) {
            var type = getRandomNumber(1, 3);
            switch (type) {
                case 1:
                    this.animals.push(new Wolf("Wolf-" + index));
                    break;
                case 2:
                    this.animals.push(new Fox("Fox-" + index));
                    break;
                default:
                    this.animals.push(new Rabbit("Rabbit-" + index));
                    break;
            }
            // console.log(this.animals);
        }
    }

    
   



    this.generateAnimal();
    this.huntingAnimals();
    this.hunterAlert();
}