import {Logic} from '../business-layer/logic.js';
import {Player} from '../entities/player.js';


export function Renderer(){
this.mainContainer = $('#main-container');
this.columnData = null;

this.pageLogic = new Logic();

// this.columnData = this.pageLogic.getDataForColumns();
// console.log(this.columnData);
var self = this;
this.currentLevel = 0;
this.game = $('<div>').addClass('game-wrapper').hide().appendTo(this.mainContainer);



this.renderAll = function(){
    this.renderFirstPart();
    this.renderGame();
    this.correctAnswer();
    this.correctMain(); 
    

}




this.renderFirstPart=function(){
   var welcomePart = $('<div>').addClass('welcome-part').appendTo(this.mainContainer);
   var welcomeHeading = $('<h1>').addClass('welcome-heading').text('Welcome to the game of associations').appendTo(welcomePart);
   var welcomePara = $('<p>').addClass('welcome-para')
   .text('This is a general knowledge game, so turn your brains on and have fun.').appendTo(welcomePart);
   var contDiv = $('<div>').addClass('cont-div').appendTo(welcomePart);
   var contBtn = $('<button>').addClass('contBtn').text('Continue').appendTo(contDiv);


   
// }

// this.renderSecondPart=function(){
    var prefDiv = $('<div>').addClass('pref-div').hide().appendTo(this.mainContainer);
    var rules = $('<div>').addClass('rules').hide()
    .text('Choose a box (A1,B3,C2,D4..etc) and word will appear, therefore you are able to guess the main word of a column. Correct guess will color the field green, incorrect red. If you guess the main word of a column, you could go for the main word of the game. Every correct answer brings you different amount of points. Each player has 20 seconds for opening a box and guessing the main words.')
    .appendTo(prefDiv);
    var minRules = $('<button>').addClass('minRules').text('X').appendTo(rules);
    var rulesBtn = $('<button>').addClass('rulesBtn').text('Rules').appendTo(prefDiv);
    var playerInfo = $('<div>').addClass('player-info').appendTo(prefDiv);
    var headingPlayer = $('<h1>').addClass('heading-player').text('Insert players names').appendTo(playerInfo);
    var inputDiv = $('<div>').addClass('input-div').appendTo(playerInfo);
    var player1 = $('<input>')
    .attr('placeholder','Insert  Name').addClass('player-name first')
    .appendTo(inputDiv);
    var player2 = $('<input>')
    .attr('placeholder','Insert  Name').addClass('player-name second')
    .appendTo(inputDiv);
    var submit = $("<button>").addClass('submit').text('Submit').appendTo(playerInfo);
    var level = $('<div>').addClass('level-info').appendTo(prefDiv);
    var levelHeading = $('<h1>').addClass('heading-player').text('Choose a difficulty level').appendTo(level);
    var lvlBtnDiv = $('<div>').addClass('lvl-div').appendTo(level);
    var levelEasyBtn = $('<button>').addClass('levelBtn').text('Easy').appendTo(lvlBtnDiv);
    var levelMediumBtn = $('<button>').addClass('levelBtn').text('Medium').appendTo(lvlBtnDiv);
    var levelHardBtn = $('<button>').addClass('levelBtn').text('Hard').appendTo(lvlBtnDiv);

    


    $(submit).on('click', function(e){
        $(playerNameF).text($(player1).val());
        $(playerNameS).text($(player2).val());   
        
    });


    $(rulesBtn).on('click', function(event){
        
        $(rules).show(1000);
        $(this).hide(1000);
     
    });

    $(minRules).on('click', function(event){
        
        $(rules).hide(1000);
        $(rulesBtn).show(1000);
     
    });    

    // LEVEL BUTTONS

    $(levelEasyBtn).on('click', (event) => {
        $(prefDiv).hide(1000)
        $(self.game).show(1000);
        this.columnData = this.pageLogic.getDataForColumns();
        // self.gameFunctionality();


        
     
    });  

    $(levelMediumBtn).on('click', (event) => {
        $(prefDiv).hide(1000)
        $(self.game).show(1000);
        this.columnData = this.pageLogic.getDataForColumnsMed();
        // self.gameFunctionality();


     
    });  

    $(levelHardBtn).on('click', (event) => {
        $(prefDiv).hide(1000)
        $(self.game).show(1000);  
        this.columnData = this.pageLogic.getDataForColumnsHard();
        // self.gameFunctionality();

      
     
    });  
  

this.renderGame = function(){

    // var game = $('<div>').addClass('game-wrapper').hide().appendTo(this.mainContainer);
    var playersDiv = $('<div>').addClass('players-wrapper-game').appendTo(self.game);
    
    var firstPlayer = $('<div>').attr('id', 'active').addClass('player player1').appendTo(playersDiv);
    var playerImg = $('<img>').addClass('playerImg player1').attr('src', 'images/avatar.png').appendTo(firstPlayer);
    var playerName = $('<div>').addClass('playerName player1').appendTo(firstPlayer);
    window.playerNameF = playerName;
    var playerPoints = $('<div>').addClass('playerPts player1').text('').appendTo(firstPlayer);
    window.playerPts1 = playerPoints;

    var timer = $('<div>').addClass('timer').text('20').appendTo(playersDiv);
    window.timerGlobal = timer;

    

    var secondPlayer = $('<div>').addClass('player player2').appendTo(playersDiv);
    var playerImg2 = $('<img>').addClass('playerImg player2').attr('src', 'images/avatar.png').appendTo(secondPlayer);
    var playerName2 = $('<div>').addClass('playerName player2').appendTo(secondPlayer);
    window.playerNameS = playerName2;
    var playerPoints2 = $('<div>').addClass('playerPts player2').text('').appendTo(secondPlayer);
    window.playerPts2 = playerPoints2;




        var playerOne = new Player('1', true);
        var playerTwo = new Player('2', false);
        var players = [playerOne, playerTwo];
        localStorage.setItem("players", JSON.stringify(players));
    
    
  
    var gameTop = $('<div>').addClass('game-part top').appendTo(self.game);
    var holder = $('<div>').addClass('holder').appendTo(gameTop);
    var columnA = $('<div>').addClass('column-a').appendTo(gameTop);
    for (var i=0; i<4; i++){
        var wordBox = $('<div>').addClass('word-box').attr('id','box'+ i).appendTo(columnA);
        $('#box0').text('A1');
        $('#box1').text('A2');
        $('#box2').text('A3');
        $('#box3').text('A4');       
    }


    

    var mainColumnA = $('<input>').addClass('main-column a').appendTo(columnA);
    $('<div>').addClass('secret-column').hide().appendTo(columnA);


    var columnB = $('<div>').addClass('column-b').appendTo(gameTop);
    for (var i=4; i<8; i++){
        var wordBox = $('<div>').addClass('word-box').attr('id','box'+ i).appendTo(columnB);

        $('#box4').text('B1');
        $('#box5').text('B2');
        $('#box6').text('B3');
        $('#box7').text('B4');
    }



    var mainColumnB = $('<input>').addClass('main-column b').appendTo(columnB);
    $('<div>').addClass('secret-column').hide().appendTo(columnB);


    var mainSolution = $('<input>').addClass('main-solution').appendTo(self.game);
    $('<div>').addClass('secret-main').hide().appendTo(self.game);



    var gameBot = $('<div>').addClass('game-part bot').appendTo(self.game);
    var columnC = $('<div>').addClass('column-c').appendTo(gameBot);

    var mainColumnC = $('<input>').addClass('main-column c').appendTo(columnC);
    $('<div>').addClass('secret-column').hide().appendTo(columnC);


    for (var i=8; i<12; i++){
        var wordBox = $('<div>').addClass('word-box').attr('id','box'+ i).appendTo(columnC);
        $('#box8').text('C4');
        $('#box9').text('C3');
        $('#box10').text('C2');
        $('#box11').text('C1');
    }


    var columnD = $('<div>').addClass('column-d').appendTo(gameBot);

    var mainColumnD = $('<input>').addClass('main-column d').appendTo(columnD);

    $('<div>').addClass('secret-column').hide().appendTo(columnD);

    for (var i=12; i<16; i++){
        var wordBox = $('<div>').addClass('word-box').attr('id','box'+ i).appendTo(columnD);
        $('#box12').text('D4');
        $('#box13').text('D3');
        $('#box14').text('D2');
        $('#box15').text('D1');
    } 

   
}
    
    $(contBtn).on('click', function(e){
        $(welcomePart).hide(1000);
        $(prefDiv).show(1000);
    })
   
    // var holder = $('<div>').addClass('holder-div').appendTo("#main-container");
    var readyBtnDiv = $('<div>').addClass('rdy-div').appendTo(self.game);
    var playBtn = $('<button>').addClass('playBtn').text('Ready').appendTo(readyBtnDiv);
    var nextBtnDiv = $('<div>').addClass('next-div').appendTo(self.game);
    var nextBtn = $('<button>').addClass('nextBtn').text('Next').hide().appendTo(nextBtnDiv);

    $(nextBtn).on('click', (event)=>{

        self.currentLevel++;
        // self.renderGame();
        
        self.renderWordBox();
        // self.gameFunctionality();
        $(nextBtn).hide();
        $(playBtn).show();
        clearInterval(interval);
        
    });


    $(playBtn).on('click', function(event){

    self.setTimeInterval(timerGlobal);
    self.gameFunctionality();

    $(".player1").css('box-shadow', '0px 5px 5px 5px #666');    
    
    $(playBtn).hide();
    })

    this.gameFunctionality = function(){
    

    var columnsLength = $('.word-box');
    var secretColumns = $('.secret-column');
    var secretMain = $('.secret-main');
    
    


    var counterForColumns = 0;
    var temp = this.columnData[counterForColumns];
    
    for(var i = 0; i<columnsLength.length; i++){
             
       
        var temp = this.columnData[self.currentLevel][counterForColumns];
        var tempSecretColumn = $(secretColumns[counterForColumns]);
        var tempSecretMain = $(secretMain[counterForColumns]);

        tempSecretColumn.text(temp.mainCol);
        tempSecretMain.text(this.columnData[self.currentLevel][4]);

      (function(temp){
        columnsLength[i].onclick = function() {
           event.target.innerText=temp.col1;    
        }
      })(temp);

      (function(temp){
        columnsLength[i+1].onclick = function() {
           event.target.innerText=temp.col2;    
        }
      })(temp);

      (function(temp){
        columnsLength[i+2].onclick = function() {
           event.target.innerText=temp.col3;    
        }
      })(temp);

      (function(temp){
        columnsLength[i+3].onclick = function() {
           event.target.innerText=temp.col4;    
        }
      })(temp);
              
        counterForColumns++;
        i += 3;
    }

}

    // Correct column answer 

    this.correctAnswer = function(){
    
    $('.main-column').on('keydown', (e)=> {
            if (e.which == 13) {
                e.preventDefault();
                var selectedInputText = $($("input:focus")[0]);

                var secretAnswer = selectedInputText.next().text();
                if(selectedInputText.val() === secretAnswer){                

                self.colorAnswerColumn();
                       

                    var players = JSON.parse(localStorage.getItem("players"));
                    
                    for (let index = 0; index < players.length; index++) {
                        
                        if(players[index].isActive){
                            if (players[index].name === '1'){
                            $(playerPts1).text(players[index].points += 10);
                                
                            } else if (players[index].name === '2'){
                                $(playerPts2).text(players[index].points += 10);
                            }
                        }
                        localStorage.setItem("players", JSON.stringify(players));
                    }
                    clearInterval(interval);
                   $(timerGlobal).text('20');
                    self.setTimeInterval(timerGlobal);
                } else {
                                      
                    this.reset();                         

                }
                
            }
        
        });

    }


    //CORRECT MAIN ANSWER

    this.correctMain = function(){

        $('.main-solution').on('keydown', function(e) {   
            if (e.which == 13) {
                e.preventDefault();
                var selectedInputText = $($("input:focus")[0]);

                var secretMain = selectedInputText.next().text();

                
                if(selectedInputText.val() === secretMain){

                  
                    self.colorAnswer();

                    var players = JSON.parse(localStorage.getItem("players"));
                    
                    for (let index = 0; index < players.length; index++) {
                        
                        if(players[index].isActive){
                            if (players[index].name === '1'){
                                $(playerPts1).text(players[index].points += 25);
                                
                            } else if (players[index].name === '2'){
                                $(playerPts2).text(players[index].points +=25);
                            }
                    
                            localStorage.setItem("players", JSON.stringify(players));

                            $(nextBtn).show();
                        }
                    }
                   clearInterval(interval);
                   $(timerGlobal).text('20');
                   
                } else {
                    self.reset();
                }
                
                
            }
        });
    }

    //CSS FOR PLAYER BOX

    this.isActive = function(players){

               
        for (let index = 0; index < players.length; index++){
        if(players[index].isActive === true){
            if(players[index].name === "1"){
                $(".player1").css('box-shadow', '0px 5px 5px 5px #666');
                $(".player2").css('box-shadow', 'none');
            } else {
                $(".player2").css('box-shadow', '0px 5px 5px 5px #666');
                $(".player1").css('box-shadow', 'none');
            }            

        }      
        
    }

    localStorage.setItem("players", JSON.stringify(players));   
    }

// COLOR MAIN

    this.colorAnswer=function(){
        var players = JSON.parse(localStorage.getItem("players"));
                    
        for (let index = 0; index < players.length; index++) {
            if(players[index].isActive){

                if (players[index].name === '1'){
                    $(event.target).css("background-color", "#207cca");
                    
                } else if (players[index].name === '2'){
                    $(event.target).css("background-color", "#FF5E28");
                }
        
                localStorage.setItem("players", JSON.stringify(players));
            } 
        }
        
    }

    // COLOR COLUMN

    this.colorAnswerColumn=function(){
        var players = JSON.parse(localStorage.getItem("players"));
                    
        for (let index = 0; index < players.length; index++) {


                if(players[index].isActive){

                if (players[index].name === '1'){
                    $(event.target).parent().children().css("background-color", "#207cca");

                    $(event.target).css("background-color", "green");  
                    
                } else if (players[index].name === '2'){
                    $(event.target).parent().children().css("background-color", "#FF5E28");

                    $(event.target).css("background-color", "green");  
                }
        
                localStorage.setItem("players", JSON.stringify(players));
            }
                
        }
        
    }

    // TIMER 
    var interval; 
    this.setTimeInterval = (timerGlobal) => {
    
            var counter = 20;
            clearInterval(interval);
            interval = setInterval(() => {
            counter--;
            if (counter >= 0 ) {
                $(timerGlobal).text(counter);
              }
            if (counter === 0 ) {
                
                var players = JSON.parse(localStorage.getItem("players"));
                        
                for (let index = 0; index < players.length; index++) {
                    
                        players[index].isActive = !players[index].isActive;
                    
                        self.isActive(players); 
                        setTimeout(() => { 
                        $(timerGlobal).text("20")  
                        }, 200);
                        
                    
                }
                localStorage.setItem("players", JSON.stringify(players));
                
                clearInterval(interval);
                this.setTimeInterval(timerGlobal);
            } 
        }, 1000);
    
    }

    // RESET ANSWER

    this.reset=function(){
        $(event.target).val('Try Again').css('background-color','red');
        if($(event.target).val('Try Again')){
           var eTarg = $(event.target)
           setTimeout(() => { 
            $(eTarg).val('').css('background-color','#751F21');
           }, 500);
            
        }
    }
  
    // RENDER WORD-BOX

    this.renderWordBox = function(){

        $('#box0').text('A1');
        $('#box1').text('A2');
        $('#box2').text('A3');
        $('#box3').text('A4'); 
        $('#box4').text('B1');
        $('#box5').text('B2');
        $('#box6').text('B3');
        $('#box7').text('B4'); 
        $('#box8').text('C1');
        $('#box9').text('C2');
        $('#box10').text('C3');
        $('#box11').text('C4');
        $('#box12').text('D1');
        $('#box13').text('D2');
        $('#box14').text('D3');
        $('#box15').text('D4');

        $('.main-column').val('').css('background-color', '#751F21');
        $('.main-solution').val('').css('background-color', 'rgb(66, 10, 11)');
        $('.word-box').css('background-color', 'maroon').on('mouseover', function(){
            $(this).css("background", "coral");
        }).on('mouseout', function() {
            $(this).css("background", "maroon");

        });
        
    }
  

}

}