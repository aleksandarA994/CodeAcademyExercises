function Room(number) {
    this.roomNumber = "Room number" + number;
    this.isTaken =false;
    this.isDirty = false;
    this.customer = null;
    this.minibar = 200;
    this.cost = 60;
    this.spentDays = 0;
    this.bill = 0;

    this.fillVacation = function(customer){
        this.isTaken = true;
        this.customer = customer;
    }

    this.leaveRoom = function(){
        if (this.customer.vacationDays === 0){
            
            this.isDirty = true;
            this.bill += (this.spentDays* this.cost);
            this.customer.pay(this.bill);
            this.isTaken = false;
            this.customer = null;
        }
    }

    this.spendDay = function(){
        if(this.customer) {
            this.spentDays++;
            this.customer.calculateDays();
            this.minibar -=20;
            this.bill += 20;
            this.leaveRoom()
            
        } 

    }

    this.getCleaned = function(){
        this.isDirty = false;
        this.minibar = 200;
        return this.bill;
    }
}