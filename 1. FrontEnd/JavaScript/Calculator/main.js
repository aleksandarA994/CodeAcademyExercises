$(function(){
var calc = $('<div>')
.addClass('calculator')
.appendTo(document.body);

$('<input>').width('99%').height('70px')
.attr('placeholder', '0')
.attr('id', 'inputId')
.attr('readonly', true)
.css("font-size", "35px")
// .css("color", "white")
.css('background-color', 'red')
// .css('border', 'none')
.appendTo(calc)
.css('text-align', 'right')
.css('outline', 'none');

 var button = $('<div>').addClass('grid').width('100%').height('450px')



.appendTo(calc);

$(document.body).css("box-sizing", "border-box")
for(var index = 0; index<20; index++){
   var btn = $('<button>').addClass('button')
    .width("24%")
    .height("15%")
    .css('margin', '0.5px')
    .css('display', 'inline-block')
    // .css('border', '1px solid black')
    .appendTo(button);
    
    switch (index) {
        case 0:
            $(btn).click(clearScreen).text('CE').val('CE');
            break;
        case 1:
            $(btn).click(function(event){backspace();}).text('C').val('C');
            break;
        case 2:
        $(btn).click(function(event){brackets();}).text('( )').val('( )');
            break;
        case 3:
        $(btn).click(function(event){getOperand('/');}).text('/').val('/');
            break;
        case 4:
        $(btn).click(function(event){getNumber(7);}).text('7').val('7');
            break;
        case 5:
        $(btn).click(function(event){getNumber(8);}).text('8').val('8');
            break;
        case 6:
        $(btn).click(function(event){getNumber(9);}).text('9').val('9');
            break;
        case 7:
        $(btn).click(function(event){getOperand('*');}).text('*').val('*');
            break;
        case 8:
        $(btn).click(function(event){getNumber(4);}).text('4').val('4');
            break;
         case 9:
         $(btn).click(function(event){getNumber(5);}).text('5').val('5');
            break;
            case 10:
         $(btn).click(function(event){getNumber(6);}).text('6').val('6');
            break;
            case 11:
         $(btn).click(function(event){getOperand('-');}).text('-').val('-');
            break;
            case 12:
         $(btn).click(function(event){getNumber(1);}).text('1').val('1');
            break;
            case 13:
         $(btn).click(function(event){getNumber(2);}).text('2').val('2');
            break;
            case 14:
         $(btn).click(function(event){getNumber(3);}).text('3').val('3');
            break;
            case 15:
         $(btn).click(function(event){getOperand('+');}).text('+').val('+');
            break;
            case 16:
         $(btn).click(function(event){percentage();}).text('%').val('%');
            break;
            case 17:
         $(btn).click(function(event){getNumber(0);}).text('0').val('0');
            break;
            case 18:
         $(btn).click(function(event){getOperand('.');}).text('.').val('.');
            break;
            case 19:
         $(btn).click(function(event){result(addition, subtraction, division, multiply);}).text('=').val('=');
            break;
        // case 10:
        // $(btn).text('%');  
        //     break;
        //     case 10:
        //     $(btn).text('$');
        //         break;
        // default:
        // $(btn).text(index - 10);
        // break;
    }

    function getNumber (num){
       var input_var = document.getElementById('inputId');
       switch(num){
          case 1:
          input_var.value += '1';
          break;
          case 2:
          input_var.value += '2';
          break;
          case 3:
          input_var.value += '3';
          break;
          case 4:
          input_var.value += '4';
          break;
          case 5:
          input_var.value += '5';
          break;
          case 6:
          input_var.value += '6';
          break;
          case 7:
          input_var.value += '7';
          break;
          case 8:
          input_var.value += '8';
          break;
          case 9:
          input_var.value += '9';
          break;
          case 0:
          input_var.value += '0';
          break;
       }
    }

    function clearScreen() {
       document.getElementById('inputId').value ="";
    }

    function getOperand(operand){
      var input_var = document.getElementById('inputId');
      switch(operand){
         case '+':
         input_var.value += '+';
         break;
         case '-':
         input_var.value += '-';
         break;
         case '*':
         input_var.value += '*';
         break;
         case '/':
         input_var.value += '/';
         break;
         case'%':
         input_var.value += '%';
         break;
              

    }

    
}

function result (){
   var input_var = document.getElementById('inputId');
   var ans = Math.floor(+eval(input_var.value));
   clearScreen();
   document.getElementById('inputId').value += ans;
}

function addition (number1, number2){
   return number1+number2;
}

function subtraction (number1, number2){
   return number1-number2;
}

function division (number1, number2){
   return number1/number2;
}

function multiply (number1, number2){
   return number1*number2;
}

function percentage(number1, number2) {
   return (100 * number1) / number2;
} 

var i = 0;
function brackets (){
   var input_var = document.getElementById('inputId');
   if (i==0){
      input_var.value += '(';
      i = 1;
      } else if (i==1){
         input_var.value += ')';
         i=0;

      }

}

function backspace(){
   var input_var = document.getElementById('inputId');
   var x = input_var.value;
   if (x.length >0){
      x = x.substring(0, x.length-1);
      input_var.value = x;
   }
}



}

})


