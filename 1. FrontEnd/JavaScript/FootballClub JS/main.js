function main(){
var club = new FootballClub("WarriorsFC");
var stadium = new Stadium ("Hall of Fame Arena");

for (var i=1; i<=30; i++){
    club.scoreGoal();
    stadium.fanShop();
    club.hooligansCosts();
    stadium.fillStadium();


if (i%8===0){
    club.generateSuperStar(1);
    
    var star = new Player("SuperStar");
    club.players.push(star);

    //  console.log("A superstar has been added to the team", club.name);
}

club.earnings=stadium.tickets+stadium.soldShirts-club.costs;

}
console.log("Great Game", club.name, "on", stadium.name,  club);

console.log("Earnings" , club.earnings);
console.log("Hooligans costs" , club.costs);
console.log("Total goals scored" , club.goals);
console.log("Shirts sold" , stadium.soldShirts);
console.log("Tickets sold" , stadium.tickets/stadium.ticketPrice);

}

main();