function User (index, age){
    this.name="User" + index;
    this.age=getRandomNumber(18, 45);
    this.aboutMe = new Story();
    this.profilePicture = new Photo();
    this.album = [];
    this.stories = [];
    this.events=[];
    


    this.generatePictures = function(){
        for (var index = 1; index <= 10; index++) {
            var pictures = new Photo(index);
            this.album.push(pictures);
                        
        } 

    }

    this.generateStories = function(){
        for (var index = 1; index <= 5; index++) {
            var story = new Story(index);
            this.stories.push(story);
                        
        } 

    }

    this.register = function(event){
        this.events.push(event);
 
    }

        
        this.generatePictures();
        this.generateStories(); 
    


    
}