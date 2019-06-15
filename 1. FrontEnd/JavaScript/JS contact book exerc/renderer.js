function PageRenderer(){
this.mainContainer = $('#main');


this.renderAll = function(){
this.renderTable();
}

this.renderTable = function(){
    var mainDiv = $('<div>').addClass('main-div').appendTo(this.mainContainer);

    var firstRow = $('<div>').addClass('first-row').appendTo(mainDiv);

    for (var i = 0; i<4; i++){
        var headingRow = $('<div>').addClass('head-row').attr('id', 'row' + i).appendTo(firstRow);
    }

    $('#row0').text('Name');
    $('#row1').text('Email Adress');
    $('#row2').text('Mobile Number');
    $('#row3').text('Action');

    var secondRow = $('<div>').addClass('second-row').appendTo(mainDiv);
    for (var i = 4; i<7; i++){
        var firstPerson = $('<input>').addClass('person-row').attr('id', 'row' + i).appendTo(secondRow);
    }

    var buttonField=$('<div>').addClass('btnField').css('width','250px').css('border', '1px solid black').appendTo(secondRow);   
    
    // var buttons1 = $('#row7');


    for (var j=0; j<3; j++){
        var button = $('<button>').addClass('button')
        .attr('id', 'btn' + j).appendTo(buttonField);
    }

    $('#row4').val('Lisa');
    $('#row5').val('lisa@gmail.com');
    $('#row6').val('5252525');

    $('#btn0').text('Read');
    $('#btn1').text('Update');
    $('#btn2').text('Delete');   

    

    var thirdRow = $('<div>').addClass('third-row').appendTo(mainDiv);
    for (var i = 8; i<11; i++){
        var secondPerson = $('<input>').addClass('person-row').attr('id', 'row' + i).appendTo(thirdRow);
    }

    // var buttons2 = $('#row11');

    var buttonField2=$('<div>').addClass('btnField').css('width','250px').css('border', '1px solid black').appendTo(thirdRow);   



    for (var i=3; i<6; i++){
        var button = $('<button>').addClass('button')
        .attr('id', 'btn' + i).appendTo(buttonField2);
    }   

    $('#row8').val('Tom');
    $('#row9').val('tom@gmail.com');
    $('#row10').val('48484848');

    $('#btn3').text('Read');
    $('#btn4').text('Update');
    $('#btn5').text('Delete');     
    
    var fourthRow = $('<div>').addClass('fourth-row').hide().appendTo(mainDiv);
    for (var i = 12; i<15; i++){
        var xPerson = $('<input>').addClass('person-row').attr('id', 'row' + i).appendTo(fourthRow);
    }

    var buttonField3=$('<div>').addClass('btnField').css('width','250px').css('border', '1px solid black').appendTo(fourthRow);   



    for (var i=6; i<9; i++){
        var button = $('<button>').addClass('button')
        .attr('id', 'btn' + i).appendTo(buttonField3);
    } 
    
    $('#row12').val();
    $('#row13').val();
    $('#row14').val();

    $('#btn6').text('Read');
    $('#btn7').text('Update');
    $('#btn8').text('Delete'); 

    var addBtn = $('<button>').addClass('addBtn').text('ADD').appendTo(this.mainContainer);



    var infoDiv = $('<div>').hide().addClass('info-div').appendTo(this.mainContainer);
    var name = $('<p>').appendTo(infoDiv);
    var mail = $('<p>').appendTo(infoDiv);
    var mobile = $('<p>').appendTo(infoDiv);

    var minBtn = $('<button>').addClass('minBtn').text('X').appendTo(infoDiv);

$('#btn0').on('click', function(e){
    infoDiv.show(1000);
    $(name).text('Name:'+ $('#row4').val());
    $(mail).text('Email:'+ $('#row5').val());
    $(mobile).text('Mobile Number:'+ $('#row6').val());
})

$('#btn3').on('click', function(e){
    infoDiv.show(1000);
    $(name).text('Name:'+ $('#row8').val());
    $(mail).text('Email:'+ $('#row9').val());
    $(mobile).text('Mobile Number:'+ $('#row10').val());
})

$(minBtn).on('click', function(e){
    $(infoDiv).hide(1000);
})

$('#btn2').on('click', function(e){
    $(secondRow).remove();
    
})

$('#btn5').on('click', function(e){
    $(thirdRow).remove();
    
})

$(addBtn).on('click', function(e){
    $(fourthRow).show(500);   
})


$('#btn1').on('click', function(e){
    $('#row4').val('');
    $('#row5').val('');
    $('#row6').val('');

    $('#btn1').text('Save');

 
})

$('#btn4').on('click', function(e){
    $('#row8').val('');
    $('#row9').val('');
    $('#row10').val('');

    $('#btn4').text('Save');

 
})

}



}