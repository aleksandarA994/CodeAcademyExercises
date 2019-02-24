function sayHi(){
    var i = 0;
    while (i < 20){
        console.log("Hai there");
        i++;
        if ( i===10){
            break;
        }
    }
}
// return gasi cela funkcija, break gasi samo while ciklusot!


sayHi();


function generateValues () {
    var i = 0;
    var max = 0;
    while (i<10){
        var random = Math.floor(Math.random() * 100) + 1  ;
        console.log(random);
        if (random>max){
            max=random;
        }

       
        i++;
         
    }
    console.log("the max number is", max);
}

generateValues();

function sumSquare (){
    var i = 101;
    var sum = 0;
    while (i<=150){
        var resultSum = Math.pow(i, 2);
        console.log(resultSum);
        sum = sum +resultSum
// sum += resultSum isto kako pogore pokratko!
        i++
    }
    

    console.log("The number is" ,sum);

}

sumSquare();

// ,(zapirka) dvoi prazno mesto!


function sumOfNumbers(number) {
    var sum = 0;

    while ()

    

}

sumOfNumbers(255);