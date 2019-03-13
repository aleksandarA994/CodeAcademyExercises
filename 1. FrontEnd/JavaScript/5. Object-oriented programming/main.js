// function war(orc, human){
//    while (orc.hitpoints>0 &&  human.hitpoints>0){
//        orc.hitpoints -= human.damage() + orc.armor;
//        console.log("Warrior took : " + orc.damage() + " DMG");
//        console.log("Warrior has : " + orc.hitpoints + " Energy");
//        human.hitpoints -= orc.damage() + human.armor;
//        console.log("Human took : " + human.damage() + " DMG");
//        console.log("Human has : " + human.hitpoints + " Energy");

//     }

//        if (human.hitpoints<=0){
           
//            console.log("The human is dead.");
//        } else if (orc.hitpoints<=0) {
           
//            console.log("The Orc is dead.");
//        } else {
//            console.log("ITS A TIE");
//        }
   

// }

// function Combatant(name, armor, hitpoints, mindamage, maxdamage){
//     this.name = name;
//     this.armor = armor; 
//     this.hitpoints = hitpoints;
//     this.mindamage = mindamage;
//     this.maxdamage = maxdamage;

//     this.damage = function (){
        
//         var damage =  Math.floor(Math.random() * (this.maxdamage - this.mindamage + 1) + this.mindamage) ;
//         return damage;
//     }
// }

// var orc = new Combatant ("Orc", 5, 720, 23, 35 );
// var human = new Combatant ("Human", 9, 550, 18, 27 );

// war(orc, human);


// function war(warrior, human) {

//     while (warrior.hitpoints > 0 && human.hitpoints > 0) {
//         warrior.hitpoints -= human.damage() + warrior.armor;
//         console.log("Warrior took : " + warrior.damage() + " DMG");
//         console.log("Warrior has : " + warrior.hitpoints + " Energy");
//         human.hitpoints -= (warrior.damage() + human.armor);
//         console.log("Human took : " + human.damage() + " DMG");
//         console.log("Human has : " + human.hitpoints + " Energy");
     

//     }
//     if (warrior.hitpoints <  0) {
//         console.log("DEADWARRIOR");
//     }
//     else {
//         console.log("DEADHUMAN");
//     }
// }


// function Combatant(name, hitpoints, minDamage, maxDamage, armor) {
//     this.name = name;
//     this.hitpoints = hitpoints;
//     this.armor = armor;
//     this.minDamage = minDamage;
//     this.maxDamage = maxDamage;

//     this.damage = function () {
//         var damage = Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1) + this.minDamage);
// return damage;
//     }
// }





// var warrior = new Combatant("ORC", 420, 25, 35, 5);
// var human = new Combatant("human", 550, 18, 27, 9);


// war(warrior, human);

window.getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.calculatePercent = function(percent) {
    return (100 - percent) <= getRandomNumber(0, 100);
}

function war() {
    var orc = new Combatant("Zugzug", 560, 16, 32, 5, "orc");
    var human = new Combatant("Dzordz", 420, 22, 27, 9, "human");

    while (orc.health > 0 && human.health > 0) {
        orc.attack(human);
        human.attack(orc);
    }

    if (orc.health <= 0) {
        console.log(human.name + " has won the battle");
    } else if (human.health <= 0) {
        console.log(orc.name + " has won the battle");
    } else {
        console.log("The battle ended with a tie");
    }

}

function Combatant(name, health, min, max, armor, type) {
    this.name = name;
    this.health = health;
    this.minDamage = min;
    this.maxDamage = max;
    this.armor = armor;
    this.type = type;
    this.evasion = 10;

    this.attack = function(target) {
        var damage = getRandomNumber(this.minDamage, this.maxDamage);
        if (this.type === "orc" && calculatePercent(50)) {
            damage *= 1.5;
            console.log(this.name + " scored a critical hit for " + damage);
        }
        target.recieveDamage(damage);
    }
    this.recieveDamage = function(dmg) {
        var chance = calculatePercent(100 - this.evasion);
        var armor = this.armor;
        if (this.type === "human" && calculatePercent(30)) {
            armor *= 1.3;
            console.log(this.name + " has blocked an attack with armor " + armor);
        }
        if (chance) {
            this.health = this.health + armor - dmg;
        } else {
            console.log(this.name + " has evaded the attack");
        }
        
    }
}

war();