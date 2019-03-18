function Bear(name){

    this.name = "Baloom";    
    this.currentMass = 300;
    // this.totalMass = 0;
    this.isWalking = true;
    this.alive = true;

    this.bearNotMoving = function(){
        if(this.currentMass = getRandomNumber (300, 350)) {
            this.isWalking = false;
            this.currentMass *= 0.8;
        }
        // console.log(this.totalMass);
    } 

   

    // this.bearDies = function(){
    //     if(this.totalMass >= 500) {
    //         this.alive = false;
    //         console.log('Bear has died');
    //     }
    // }

    this.bearNotMoving();  
    // this.bearDies();
    // this.huntingAnimals(); 

} 
