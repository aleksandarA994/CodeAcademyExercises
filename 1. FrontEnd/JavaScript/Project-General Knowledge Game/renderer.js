function Renderer(){
this.mainContainer = $('#main-container');
this.columnData = null;

this.pageLogic = new Logic();

// this.columnData = this.pageLogic.getDataForColumns();
console.log(this.columnData);
var self = this;
this.currentLevel = 0;
this.game = $('<div>').addClass('game-wrapper').hide().appendTo(this.mainContainer);



this.renderAll = function(){
    this.renderFirstPart();
    this.renderGame();
    this.correctAnswer();
    this.correctMain();
    // this.gameFunctionality();
    

    // this.renderSecondPart();
    // this.renderGame();

}


// this.setTimeInterval = function(timer){
    
//     var counter = 5;

//         var interval = setInterval(function() {
//         counter--;
//         if (counter >= 0) {
//             $(timer).text(counter);
//           }
//         if (counter === 0 ) {
            
//             var players = JSON.parse(localStorage.getItem("players"));
                    
//             for (let index = 0; index < players.length; index++) {
                
//                     players[index].isActive = !players[index].isActive;
//                     // if za active id
                    
                
//             }
//             localStorage.setItem("players", JSON.stringify(players));
//             clearInterval(interval);
//         } 
//     }, 1000);

// }


// this.createPlayers = function(){

//     var player1 = new Player($(playerName).text(), true);
//     var player2 = new Player($(playerName).text(), false);
//     var players = [player1, player2];
//     localStorage.setItem("players", JSON.stringify(players));

// }

this.renderFirstPart=function(){
   var welcomePart = $('<div>').addClass('welcome-part').appendTo(this.mainContainer);
   var welcomeHeading = $('<h1>').addClass('welcome-heading').text('Welcome to the game of associations').appendTo(welcomePart);
   var welcomePara = $('<p>').addClass('welcome-para')
   .text('This is a general knowledge game, so turn your brains on and have fun.').appendTo(welcomePart);
   var contBtn = $('<button>').addClass('contBtn').text('Continue').appendTo(welcomePart);


   
// }

// this.renderSecondPart=function(){
    var prefDiv = $('<div>').addClass('pref-div').show().appendTo(this.mainContainer);
    var rules = $('<div>').addClass('rules').hide()
    .text('Choose a box (A1,B3,C2,D4..etc) and word will appear, therefore you are able to guess the main word of the column or press next.If you guess the main word of a column, you could go for the main word of the game. Every correct answer brings you different amount of points, depending on how many word boxes are revealed. Each player has 15 seconds for opening a box and guessing the main words.')
    .appendTo(prefDiv);
    var minRules = $('<button>').addClass('minRules').text('X').appendTo(rules);
    var rulesBtn = $('<button>').addClass('rulesBtn').text('Rules').appendTo(prefDiv);
    var playerInfo = $('<div>').addClass('player-info').appendTo(prefDiv);
    var headingPlayer = $('<h1>').addClass('heading-player').text('Insert players names').appendTo(playerInfo);
    var player1 = $('<input>')
    .attr('placeholder','Insert  Name').addClass('player-name first')
    .appendTo(playerInfo);
    var player2 = $('<input>')
    .attr('placeholder','Insert  Name').addClass('player-name second')
    .appendTo(playerInfo);
    var submit = $("<button>").addClass('submit').text('Submit').appendTo(playerInfo);
    var level = $('<div>').addClass('level-info').appendTo(prefDiv);
    var levelHeading = $('<h1>').addClass('heading-player').text('Choose a difficulty level').appendTo(level);
    var levelEasyBtn = $('<button>').addClass('levelBtn').text('Easy').appendTo(level);
    var levelMediumBtn = $('<button>').addClass('levelBtn').text('Medium').appendTo(level);
    var levelHardBtn = $('<button>').addClass('levelBtn').text('Hard').appendTo(level);

    


    $(submit).on('click', function(e){
        $(playerName).text($(player1).val());
        $(playerName2).text($(player2).val());   
        
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
        self.gameFunctionality();


        
     
    });  

    $(levelMediumBtn).on('click', (event) => {
        $(prefDiv).hide(1000)
        $(self.game).show(1000);
        this.columnData = this.pageLogic.getDataForColumnsMed();
        self.gameFunctionality();


     
    });  

    $(levelHardBtn).on('click', (event) => {
        $(prefDiv).hide(1000)
        $(self.game).show(1000);  
        this.columnData = this.pageLogic.getDataForColumnsHard();
        self.gameFunctionality();

      
     
    });  

    // this.getData = function(){

        
    // $(levelEasyBtn).on('click', function(event){
      
    //     this.columnData = this.pageLogic.getDataForColumns();
    //     self.gameFunctionality();

        
     
    // });  

    // $(levelMediumBtn).on('click', function(event){
      
    //     this.columnData = this.pageLogic.getDataForColumnsMed();
    //     self.gameFunctionality();


     
    // });  

    // $(levelHardBtn).on('click', function(event){
       
    //     this.columnData = this.pageLogic.getDataForColumnsHard();
    //     self.gameFunctionality();

      
     
    // });  

    // }

    
// }
// var game = $('<div>').addClass('game-wrapper').hide().appendTo(this.mainContainer);

this.renderGame = function(){
    // var game = $('<div>').addClass('game-wrapper').hide().appendTo(this.mainContainer);
    var playersDiv = $('<div>').addClass('players-wrapper-game').appendTo(self.game);
    
    var firstPlayer = $('<div>').attr('id', 'active').addClass('player player1').appendTo(playersDiv);
    var playerImg = $('<img>').addClass('playerImg').attr('src', 'images/avatar.png').appendTo(firstPlayer);
    var playerName = $('<div>').addClass('playerName').appendTo(firstPlayer);
    var playerPoints = $('<div>').addClass('playerPts').text('').appendTo(firstPlayer);

    var timer = $('<div>').addClass('timer').text('20').appendTo(playersDiv);

    

    var secondPlayer = $('<div>').addClass('player player2').appendTo(playersDiv);
    var playerImg2 = $('<img>').addClass('playerImg').attr('src', 'images/avatar.png').appendTo(secondPlayer);
    var playerName2 = $('<div>')
    
    .addClass('playerName').appendTo(secondPlayer);
    var playerPoints2 = $('<div>').addClass('playerPts').text('').appendTo(secondPlayer);

      // Players turns
//   var turn = true;
//   this.playersTurn = function(){
    
//       if(turn == true){
//           $(firstPlayer).css('box-shadow', '0px 10px 10px 10px #666');
//         //   self.setTimeInterval(timer);
//           self.correctAnswer();
//         //   if(counter === 0){
//             turn = false;  
//         //   }
             
//       } else if(turn == false){
//             $(firstPlayer).css();

//             $(secondPlayer).css('box-shadow', '0px 10px 10px 10px #666');
//             self.setTimeInterval(timer);
//             turn = true;
//           }
//       }

    //   this.createPlayers = function(){

        var playerOne = new Player('1', true);
        var playerTwo = new Player('2', false);
        var players = [playerOne, playerTwo];
        localStorage.setItem("players", JSON.stringify(players));
    
    // }

  


  
    var gameTop = $('<div>').addClass('game-part top').appendTo(self.game);
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



    var gameBot = $('<div>').addClass('game-part bot').appendTo(self.gfgame);
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
    var playBtn = $('<button>').addClass('playBtn').text('Ready').appendTo(self.game);
    var nextBtn = $('<button>').addClass('nextBtn').text('Next').show().appendTo(self.game);

    $(nextBtn).on('click', (event)=>{

        self.currentLevel++;
        // self.renderGame();
        self.gameFunctionality();
    });


    $(playBtn).on('click', function(event){

    self.setTimeInterval(timer);
    $(".player1").css('box-shadow', '0px 10px 10px 10px #666');    
    
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
        tempSecretMain.text(this.columnData[self.currentLevel   ][4]);

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
      
        // $(columnsLength[i + 1]).text(this.columnData[counterForColumns].col2);
        // $(columnsLength[i + 2]).text(this.columnData[counterForColumns].col3);
        // $(columnsLength[i + 3]).text(this.columnData[counterForColumns].col4);

        counterForColumns++;
        i += 3;
    }

}

    // Correct column answer

    this.correctAnswer = function(){
    
    $('.main-column').on('keydown', function(e) {
            if (e.which == 13) {
                e.preventDefault();
                var selectedInputText = $($("input:focus")[0]);

                var secretAnswer = selectedInputText.next().text();
                if(selectedInputText.val() === secretAnswer){
                    // alert("Tocen odgovor");

                    var players = JSON.parse(localStorage.getItem("players"));
                    
                    for (let index = 0; index < players.length; index++) {
                        
                        if(players[index].isActive){
                            players[index].points += 5;
                        }
                    }
                    localStorage.setItem("players", JSON.stringify(players));
                } else{
                    alert ('Incorrect');
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
                // alert("Tocen odgovor");

                var players = JSON.parse(localStorage.getItem("players"));
                
                for (let index = 0; index < players.length; index++) {
                    
                    if(players[index].isActive){
                        players[index].points += 15;
                    }
                }
                localStorage.setItem("players", JSON.stringify(players));

                $(nextBtn).show();

            } else{
                alert ('Incorrect');
                
            }
        }
    });

    }

    //CSS FOR PLAYER BOX

    this.isActive = function(players){

        // var players = JSON.parse(localStorage.getItem("players"));
        
        for (let index = 0; index < players.length; index++){
        if(players[index].isActive === true){
            if(players[index].name === "1"){
                $(".player1").css('box-shadow', '0px 10px 10px 10px #666');
                $(".player2").css('box-shadow', 'none');
            } else {
                $(".player2").css('box-shadow', '0px 10px 10px 10px #666');
                $(".player1").css('box-shadow', 'none');
            }
            

            // players[index].isActive = !players[index].isActive;

            // players.isActive =  false;

        } 
        // else if (players[index].name){
        //     $(".player2").css('box-shadow', '0px 10px 10px 10px #666');
        //     $(".player1").css('box-shadow', 'none');



        //     players.isActive = true;
        // };
        
    }

    localStorage.setItem("players", JSON.stringify(players));   
    }

    // TIMER
    
    this.setTimeInterval = (timer) => {
    
        var counter = 20;
    
            var interval = setInterval(() => {
            counter--;
            if (counter >= 0) {
                $(timer).text(counter);
              }
            if (counter === 0 ) {
                
                var players = JSON.parse(localStorage.getItem("players"));
                        
                for (let index = 0; index < players.length; index++) {
                    
                        players[index].isActive = !players[index].isActive;

                        // if za active id

                        self.isActive(players); 
                        setTimeout(() => { 
                        $(timer).text("20")  
                        }, 200);
                        
                    
                }
                localStorage.setItem("players", JSON.stringify(players));
                
                clearInterval(interval);
                this.setTimeInterval(timer);
            } 
        }, 1000);
    
    }



}



}