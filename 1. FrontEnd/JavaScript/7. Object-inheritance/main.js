function Mammal (type, name, height){
this.type = type;
this.name = name;
this.height = height;

this.run = function (){
    console.log (this.type, "is running")

}
this.climb = function(){
    console.log(this.type, "is climbing")
}
this.eat = function(){
    console.log(this.type, "is eating")
}
}

function Monkey (type, name, height){

    this.fight = function(){
        console.log(this.type, "is fighting")
    }

    this.__proto__= new Mammal(type, name, height);
}

function Human (type, name, height){

    this.speak = function(){
        console.log(this.type, "is speaking")
    }
    this.__proto__= new Monkey(type, name, height);
}
 
// Monkey.prototype = new Mammal();
// Human.prototype = new Monkey ();

var human = new Human ("Human", "Alek", 183);
var monkey = new Monkey("Animal", "Igor", 165);
