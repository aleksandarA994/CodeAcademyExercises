$(function(){
var game = $("<div>")
.addClass('game')
.appendTo(document.body);

var winn = $('<div>')
.addClass('winner')
.appendTo(document.body);





for(var index = 0; index<9; index++){
    var box = $('<button>').html("").text(".").addClass('game-field').attr('id', index).appendTo(game);
    $(box).on("click", function(event){
        xORo();
    
    
    winner();
    

})
    
}




function winner(){

 

    console.log($('#0').html());    
    if ( $('#0').html() !== "." && $('#0').html() === $('#1').html() && $('#0').html() === $('#2').html() ){
              $(winn).html('WE HAVE A WINNER');
              
    
    } else if  ($('#3').html() !== "."  && $('#3').html()  === $('#4').html() && $('#3').html()  === $('#5').html() ){
        $(winn).html('WE HAVE A WINNER');
    } else if  ($('#6').html() !== "."  && $('#6').html()  === $('#7').html() && $('#6').html()  === $('#8').html() ){
        $(winn).html('WE HAVE A WINNER');
    } else if  ($('#0').html() !== "."  && $('#0').html()  === $('#3').html() && $('#0').html()  ===  $('#6').html() ){
        $(winn).html('WE HAVE A WINNER');
    } else if  ($('#3').html() !== "."  && $('#3').html()  === $('#4').html() && $('#3').html()  ===$('#5').html() ){
        $(winn).html('WE HAVE A WINNER');
    } else if  ($('#1').html() !== "." && $('#1').html()  === $('#4').html() && $('#1').html()  == $('#7').html() ){
        $(winn).html('WE HAVE A WINNER');
    } else if  ($('#3').html() !== "."  && $('#3').html()  === $('#4').html() && $('#3').html()  === $('#5').html() ){
        $(winn).html('WE HAVE A WINNER');
    } else if  ($('#2').html() !== "." && $('#2').html()  === $('#5').html() && $('#2').html()  === $('#8').html() ){
        $(winn).html('WE HAVE A WINNER');
    }else if  ($('#0').html() !== "."  && $('#0').html()  === $('#4').html() && $('#0').html()  ===  $('#8').html() ){
        $(winn).html('WE HAVE A WINNER');
    }else if  ($('#2').html() !== "."  && $('#2').html()  === $('#4').html() && $('#2').html()  === $('#6').html() ){
        $(winn).html('WE HAVE A WINNER');
    }
}





var i = 0;
function xORo (){
     
    if (i==0){
             
            $(event.target).html('X').css("background-color", "darkgrey");
            i = 1;
            
        } else if (i==1){        
            $(event.target).html('O').css("background-color", "white");
            i = 0;
        }               
      
          
    }



 
   


})