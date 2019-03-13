function Human(name) {
    this.name = "Person-" + index;
    this.vacationDays = 5;

    this.pay = function (money) {
        this.money -= money;
    }

    this.calculateDays = function(){
        this.vacationDays--;
    }
} 