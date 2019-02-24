function calculateTax (salary, type) {
if (salary<=1000 && type!=="craftsman"){
    return salary*0.11;
} else if (salary<=1000 && type==="craftsman"){
    return salary*0.05;
} else if (salary>1000 && type!=="craftsman"){
    return (1000*0.11)+((salary-1000)*(0.18));

} else if (salary>1000 && type==="craftsman"){
    return (1000*0.05)+((salary-1000)*(0.1));
}else{
    alert("wrong input");
}
}

var moneySum=calculateTax(1200, "craftsman");
alert(moneySum);



function concatenateStrings(string1, string2, boolean) {
    if (boolean === false) {
        return string1 + string2
    } else if (boolean === true) {
        return string2 + string1
    } else {
        return 'Error in parameters, please check again.'
    }
}

var result = concatenateStrings('Forze ', 'Juve ', false);
alert(result);