function Logic(){

    this.gameRepo = new Repository();

    this.getDataForColumns = function(){

        var columnData = this.gameRepo.generateEasyLevel();
       
        return columnData;    

    }

    this.getDataForColumnsMed = function(){
       
        var columnData = this.gameRepo.generateMediumLevel();

        return columnData;    

    }

    this.getDataForColumnsHard = function(){

        var columnData = this.gameRepo.generateHardLevel();

        return columnData;    

    }


    
}