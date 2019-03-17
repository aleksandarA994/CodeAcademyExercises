function FootballClub (name){
    this.name=name;
    this.players=[];
    this.costs = 0;
    this.earnings = 0;
    this.goals = 0;
    

    this.generatePlayers=function(number){
        for (i=1; i<=number; i++){
            var player = new Player("Player");
            this.players.push(player);
            // console.log("This is player", i);
            
        }
    }

    this.generateSuperStar = function (number){
        for (i=1; i<=number; i++){
            var star = new Player("SuperStar");
            
    }
    }

    this.scoreGoal = function(){
        var random = getRandomNumber(1, 10);
    
    
    
        if (random <= 3) {
          
           this.goals++;
           return true;
    
        }
        return false;
    }

    this.hooligansCosts = function(){
        this.costs+=getRandomNumber(10000, 15000);
        
        
    }

    
    this.hooligansCosts();
    this.scoreGoal();
    this.generatePlayers(22);
    this.generateSuperStar(0);
}   