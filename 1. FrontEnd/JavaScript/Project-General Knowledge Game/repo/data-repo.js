function Repository(){

    this.easyLevel = [];
    this.mediumLevel=[];
    this.hardLevel=[];
    

    this.generateEasyLevel   = function(){

        this.getDataEasy();
        this.getDataEasy2();
        this.getDataEasy3();

        return this.easyLevel;
    }
    this.getDataEasy=function(){
        var easyLvl = [];
        easyLvl.push(new Column('Pesos', 'Santiago', 'Valdivia', 'Atacama', "Chile"));
        easyLvl.push(new Column('Base', 'Peak', 'Alps', 'Forest', "Mountain"));

        easyLvl.push(new Column('Sacred Valley', 'Lima', 'Incas', 'Machu Picchu', "Peru"));

        easyLvl.push(new Column('Ecuador', 'Argentina', 'Colombia', 'Brazil', "South America"));
        easyLvl.push("Andes");

        this.easyLevel.push(easyLvl);
    }


    this.getDataEasy2=function(){
        var easyLvl2 = [];

        easyLvl2.push(new Column('Prisoners', 'World War 2', 'Auschwitz', 'Treblinka', "Camp"));
        easyLvl2.push(new Column('Germany', 'Nazism', 'War', 'Leader', "Hitler"));

        easyLvl2.push(new Column('Mask', 'Station', 'Poisonous', 'Helium', "Gas"));

        easyLvl2.push(new Column('Jerusalem', 'Synagogue', 'Judaism', 'Anne Frank', "Jews"));
        easyLvl2.push("Holocaust");

        this.easyLevel.push(easyLvl2);
    }

    this.getDataEasy3=function(){

        var easyLvl3 = [];

        easyLvl3.push(new Column('Water', 'Nature', 'Flowing', 'Vardar', "River"));
        easyLvl3.push(new Column('Wallet', 'Wealth', 'Paper', 'Currency', "Money"));

        easyLvl3.push(new Column('Thief', 'Action', 'Stealing', 'Armed', "Robbery"));

        easyLvl3.push(new Column('Credit Card', 'Account', 'Transfer', 'Deposit', "Transaction"));
        easyLvl3.push("Bank");

        this.easyLevel.push(easyLvl3);
    
    }

    this.generateMediumLevel   = function(){

        this.getDataMedium();
        this.getDataMedium2();
        this.getDataMedium3();

        return this.mediumLevel;;
    }
    this.getDataMedium=function(){
        var mediumLvl = [];
        mediumLvl.push(new Column('Greek', 'Slavic', 'Egyptian', 'Scandinavian', "Mythology"));
        mediumLvl.push(new Column('Christianity', 'Islam', 'Buddhism', 'Hinduism', "Religion"));

        mediumLvl.push(new Column('Thunder', 'Olympus', 'Hera', 'Greece', "Zeus"));

        mediumLvl.push(new Column('Paranormal', 'Mystical', 'Miraculous', 'Force', "Supernatural"));
        mediumLvl.push("God");

        this.mediumLevel.push(mediumLvl);
    }


    this.getDataMedium2=function(){
        var mediumLvl2 = [];

        mediumLvl2.push(new Column('Magazine', 'Announcement', 'The New York Times', 'Print', "Newspaper"));
        mediumLvl2.push(new Column('Social Media', 'Network', 'Wireless', 'Connection', "Internet"));

        mediumLvl2.push(new Column('Business', 'Promotion', 'Product', 'Management', "Marketing"));

        mediumLvl2.push(new Column('Picture', 'Sound', 'Recording', 'Tape', "Video"));
        mediumLvl2.push("Advertisement");

        this.mediumLevel.push(mediumLvl2);
    }

    this.getDataMedium3=function(){

        var mediumLvl3 = [];

        mediumLvl3.push(new Column('Apartment', 'Trump', 'Country', 'First Lady', "President"));
        mediumLvl3.push(new Column('Commercial', 'Meeting', 'Party', 'Speech', "Campaigne"));

        mediumLvl3.push(new Column('Right', 'Sheet', 'Box', 'Choice', "Vote"));

        mediumLvl3.push(new Column('Government', 'Foreign', 'Duel', 'Ministry', "Politics"));
        mediumLvl3.push("Elections");

        this.mediumLevel.push(mediumLvl3);
    
    }

    this.generateHardLevel   = function(){

        this.getDataHard();
        this.getDataHard2();
        this.getDataHard3();

        return this.hardLevel;;
    }
    this.getDataHard=function(){
        var hardLvl = [];

        hardLvl.push(new Column('Movie', 'Character', 'Action', '007', "James Bond"));
        hardLvl.push(new Column('Agency', 'Service', 'Security', 'USA', "FBI"));

        hardLvl.push(new Column('Property', 'Land', 'Buildings', 'Selling', "Real estate"));

        hardLvl.push(new Column('Spy', 'Classified', 'Unknown', 'Confidential', "Secret"));
        hardLvl.push("Agent");

        this.hardLevel.push(hardLvl);
    }


    this.getDataHard2=function(){
        var hardLvl2 = [];
       

        hardLvl2.push(new Column('Representative', 'Law', 'Majority', 'Palace of Westminster', "Parliament"));
        hardLvl2.push(new Column('Belgium', 'City', 'Atomium', 'Grand Place', "Brussels"));

        hardLvl2.push(new Column('Money', 'Currency', 'Cent', 'Coin', "Euro"));

        hardLvl2.push(new Column('War', 'Comfort', 'Green', 'Geographical', "Zone"));
        hardLvl2.push("European Union");

        this.hardLevel.push(hardLvl2);
    }

    this.getDataHard3=function(){

        var hardLvl3 = [];
        

        hardLvl3.push(new Column('Life', 'Funeral', 'End', 'Incarnation', "Death"));
        hardLvl3.push(new Column('Expressing', 'Body', 'Language', 'Victorian', "Speech"));

        hardLvl3.push(new Column('Slave', 'Lord', 'Chain', 'Cotton', "Slavery"));

        hardLvl3.push(new Column('Wrong', 'Left', 'Fair', 'Moral', "Right"));
        hardLvl3.push("Freedom");

        this.hardLevel.push(hardLvl3);
    
    }

}   