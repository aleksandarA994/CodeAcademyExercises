function SocialNetwork(name) {
    this.name = name;
    this.users = [];
    this.events = [];
    


    this.generateUsers = function() {
        for (var index = 1; index <= 50; index++) {
            var user = new User(index);
            
            var eventNumber = getRandomNumber(0, this.events.length);
            user.register(this.events[eventNumber]);
            this.users.push(user);
        }
                        
        

        
    }

    this.generateEvents = function (){
        for (var index = 1; index <= 5; index++) {
            var event = new Event("Disco"+index);
            this.events.push(event);
                        
        } 

    }
    

    this.generateEvents();
    this.generateUsers();
    
    
}