function Hotel(name){
    this.name = name;
    this.rooms = [];

    this.work= function(day){
        for (let index = 0; index < this.rooms.length; index++) {
            var room = this.rooms[index];
            room.spendDay();
        
    }

    this.admit = function (customer){
        for (let index = 0; index < this.rooms.length; index++) {
            var room = this.rooms[index];
            if (!room.isDirty && !room.isTaken){
            room.fillVacation(customer);

            }
            
        }
    }

    this.generateRooms = function(){
        for (var index=1; index<=100; index++){
            var room = new room(index);
            this.rooms.push(room);
        }
    }