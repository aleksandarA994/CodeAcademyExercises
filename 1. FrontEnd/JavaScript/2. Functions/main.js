function calculatePrice(price, quantity){
    var result = price * quantity;
    return result;
}

var result = calculatePrice (890, 46);
var result2 = calculatePrice (650, 60);

alert(result);
alert(result2); 

function calculateCelsius (celsius){
    
    var result = celsius * 1.8 + 32;
    console.log(result);
}


var cels = calculateCelsius(5);

function calculateFahrenheit (fahrenheit){
    var result = (5/9) * (fahrenheit-32);
    console.log(result);
}

var fahr = calculateFahrenheit(10);

function calculateClasses (classes, sessions, wintersessions, months){
    return result = (classes*sessions)*months - wintersessions * classes
}

var classes = calculateClasses (3, 12, 6, 6);

console.log(result);


function calculateIphonePrice (quantity, price, customs, tax){
    return result = (quantity)*(price + customs + tax)

}

var iphonePrice = calculateIphonePrice (30, 899.95, 45, 170);
console.log(result); 



function convertTemperature (temperature, type){
    if (type == "celsius"){
        return temperature * 1.8 + 32;        
    } else if (type == "fahrenheit"){
        return (5/9) * (temperature-32);     
    } else {
        return temperature;
    }
}
//moze i samo if bez else ako ima return, ako nema mora else !!!, else e kako plan b za odredena funkcija i potfunkcija... (ili ako) === apsolutno tocno/==truthy ili falsy

var fahr = convertTemperature (38, "celsius");
var cels = convertTemperature (88, "fahrenheit");
var sameNum = convertTemperature (300);


function moneySum (money) {
    if (money<500){
        alert("go to cinema");
    } else if (money>500){
        alert("go to restaurant");
    } else 
    alert("none");

}

var money = moneySum ("sdsd");

function registration (bhp){
    if (bhp <= 85){
        alert("3000 denars");
    } else if (bhp > 85 && bhp < 150){
        alert("5000 denars");

    } else if (bhp > 150){
        alert("15000 denars");
    }
}

var bhp = registration (73);

