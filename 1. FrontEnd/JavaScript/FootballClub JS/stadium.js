function Stadium (name){
    this.name="Hall of Fame Arena";
    this.seats = 60000;
    this.ticketPrice = 10;
    this.tickets = 0;
    this.soldShirts = 0;


    this.fillStadium = function (){
        this.tickets += (getRandomNumber(60,80)/100)*this.seats*this.ticketPrice;
        // console.log(this.tickets);
    }

    this.fanShop = function () {
       this.soldShirts+=0.1*this.tickets;
       if (FootballClub.scoreGoal){
           this.soldShirts*=1.25;
       }
    //    console.log(this.soldShirts);
    }

    this.fillStadium();
    this.fanShop();
    

}   