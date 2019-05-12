import {Column} from '../entities/column.js';



export function Repository(){

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
        easyLvl.push(new Column('Pesos', 'Santiago', 'Valdivia', 'Atacama', "chile"));
        easyLvl.push(new Column('Base', 'Peak', 'Alps', 'Forest', "mountain"));

        easyLvl.push(new Column('Sacred Valley', 'Lima', 'Incas', 'Machu Picchu', "peru"));

        easyLvl.push(new Column('Ecuador', 'Argentina', 'Colombia', 'Brazil', "south america"));
        easyLvl.push("andes");

        this.easyLevel.push(easyLvl);
    }


    this.getDataEasy2=function(){
        var easyLvl2 = [];

        easyLvl2.push(new Column('Prisoners', 'World War 2', 'Auschwitz', 'Treblinka', "camp"));
        easyLvl2.push(new Column('Germany', 'Nazism', 'War', 'Leader', "hitler"));

        easyLvl2.push(new Column('Mask', 'Station', 'Poisonous', 'Helium', "gas"));

        easyLvl2.push(new Column('Jerusalem', 'Synagogue', 'Judaism', 'Anne Frank', "jews"));
        easyLvl2.push("holocaust");

        this.easyLevel.push(easyLvl2);
    }

    this.getDataEasy3=function(){

        var easyLvl3 = [];

        easyLvl3.push(new Column('Water', 'Nature', 'Flowing', 'Vardar', "river"));
        easyLvl3.push(new Column('Wallet', 'Wealth', 'Paper', 'Currency', "money"));

        easyLvl3.push(new Column('Thief', 'Action', 'Stealing', 'Armed', "robbery"));

        easyLvl3.push(new Column('Credit Card', 'Account', 'Transfer', 'Deposit', "transaction"));
        easyLvl3.push("bank");

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
        mediumLvl.push(new Column('Greek', 'Slavic', 'Egyptian', 'Scandinavian', "mythology"));
        mediumLvl.push(new Column('Christianity', 'Islam', 'Buddhism', 'Hinduism', "religion"));

        mediumLvl.push(new Column('Thunder', 'Olympus', 'Hera', 'Greece', "zeus"));

        mediumLvl.push(new Column('Paranormal', 'Mystical', 'Miraculous', 'Force', "supernatural"));
        mediumLvl.push("god");

        this.mediumLevel.push(mediumLvl);
    }


    this.getDataMedium2=function(){
        var mediumLvl2 = [];

        mediumLvl2.push(new Column('Magazine', 'Announcement', 'The New York Times', 'Print', "newspaper"));
        mediumLvl2.push(new Column('Social Media', 'Network', 'Wireless', 'Connection', "internet"));

        mediumLvl2.push(new Column('Business', 'Promotion', 'Product', 'Management', "marketing"));

        mediumLvl2.push(new Column('Picture', 'Sound', 'Recording', 'Tape', "video"));
        mediumLvl2.push("advertisement");

        this.mediumLevel.push(mediumLvl2);
    }

    this.getDataMedium3=function(){

        var mediumLvl3 = [];

        mediumLvl3.push(new Column('Apartment', 'Trump', 'Country', 'First Lady', "president"));
        mediumLvl3.push(new Column('Commercial', 'Meeting', 'Party', 'Speech', "campaigne"));

        mediumLvl3.push(new Column('Right', 'Sheet', 'Box', 'Choice', "vote"));

        mediumLvl3.push(new Column('Government', 'Foreign', 'Duel', 'Ministry', "politics"));
        mediumLvl3.push("elections");

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

        hardLvl.push(new Column('Movie', 'Character', 'Action', '007', "james bond"));
        hardLvl.push(new Column('Agency', 'Service', 'Security', 'USA', "fbi"));

        hardLvl.push(new Column('Property', 'Land', 'Buildings', 'Selling', "real estate"));

        hardLvl.push(new Column('Spy', 'Classified', 'Unknown', 'Confidential', "secret"));
        hardLvl.push("agent");

        this.hardLevel.push(hardLvl);
    }


    this.getDataHard2=function(){
        var hardLvl2 = [];
       

        hardLvl2.push(new Column('Representative', 'Law', 'Majority', 'Palace of Westminster', "parliament"));
        hardLvl2.push(new Column('Belgium', 'City', 'Atomium', 'Grand Place', "brussels"));

        hardLvl2.push(new Column('Money', 'Currency', 'Cent', 'Coin', "euro"));

        hardLvl2.push(new Column('War', 'Comfort', 'Green', 'Geographical', "zone"));
        hardLvl2.push("european union");

        this.hardLevel.push(hardLvl2);
    }

    this.getDataHard3=function(){

        var hardLvl3 = [];
        

        hardLvl3.push(new Column('Life', 'Funeral', 'End', 'Incarnation', "death"));
        hardLvl3.push(new Column('Expressing', 'Body', 'Language', 'Victorian', "speech"));

        hardLvl3.push(new Column('Slave', 'Lord', 'Chain', 'Cotton', "slavery"));

        hardLvl3.push(new Column('Wrong', 'Left', 'Fair', 'Moral', "right"));
        hardLvl3.push("freedom");

        this.hardLevel.push(hardLvl3);
    
    }

}   