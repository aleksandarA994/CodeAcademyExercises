function main(){
     var forest = new Forest('Black forest');
     
     for(var index = 0; index < 30; index++) {
         var random = getRandomNumber(0,10);
         if (random <= 3){
             forest.huntingAnimals();
         }
         if (index > 20){
        
             forest.hunterAlert();
         
        }
        var bear = new Bear();
        bear.bearNotMoving();
        
     }
    // bear.bearDies();

    if (bear.currentMass < 500){
        console.log("The total mass of the bear is", bear.currentMass,"The bear is alive");
    } else {
        console.log("The total mass of the bear is", bear.currentMass, "The bear is dead")
    }


     console.log(Bear.name, "is in the",forest.name, forest);

}

main();