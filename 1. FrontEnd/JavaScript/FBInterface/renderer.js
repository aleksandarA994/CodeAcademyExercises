function PageRenderer(user) {
    this.users = user;
    this.mainContainer = document.getElementById("main-container");

    this.renderAll = function() {
        this.mainContainer.classList.add("main");
        this.renderLeft();
        this.renderRight();
    }
    this.renderLeft = function() {
        var profileInfoLeft = document.createElement("div");
        profileInfoLeft.innerHTML = "";
        profileInfoLeft.classList.add("profile-info-left");
        this.mainContainer.appendChild(profileInfoLeft);

        var profilePic = document.createElement("img");
        profilePic.innerHTML = "";        
        profilePic.classList.add("profile-picture");
        profilePic.src = this.users.profilePicture.source;
        profilePic.alt = this.users.profilePicture.alt;
        profileInfoLeft.appendChild(profilePic);

        var profileAbout = document.createElement("div");
        profileAbout.innerHTML = "";
        
        var header = document.createElement("h1");
        header.innerText = this.users.aboutMe.header;
        profileAbout.appendChild(header);
        

        var paragraph = document.createElement("p");
        paragraph.innerText = this.users.aboutMe.paragraph;
        profileAbout.appendChild(paragraph);

        profileAbout.classList.add("profile-about");
        
        profileInfoLeft.appendChild(profileAbout);

        
    }
    this.renderRight = function() {
        var postRight = document.createElement("div");
        postRight.innerHTML = "";
        postRight.classList.add("posts-right");
        this.mainContainer.appendChild(postRight);

        var album = document.createElement("div");
        album.classList.add("album");
        postRight.appendChild(album);

        for (var i=0; i<10; i++){
            var picture = $('<img>')
            .addClass('albumImg')
            .attr('src', this.users.album[i].source)
            .attr('id', 'pic' + this.users.album[i].id)
            .appendTo(album);
            
            $(picture).on('click', function(event){
                zoom();
            });
        }

        function zoom(){
            $(event.target).width('300px').height('300px')
                       
            
        };

      

    

        var posts = document.createElement('div');
        posts.classList.add('posts');
        postRight.appendChild(posts);

        


        for(var index = 0; index < 3; index++) {
            var stories = document.createElement('div');
            stories.id=this.users.stories[index].id;
                   
            stories.classList.add('stories');
            posts.appendChild(stories);   
            
            var newsHeader = document.createElement('h1');
        newsHeader.innerText = this.users.aboutMe.header;
        stories.appendChild(newsHeader);

        var newsPara = document.createElement('p');
        newsPara.innerText = this.users.aboutMe.paragraph;
        stories.appendChild(newsPara);

        var storyBtn=document.createElement('button');
        storyBtn.innerHTML="Delete";
        storyBtn.classList.add('storyBtn');
        stories.appendChild(storyBtn);
           
        $(storyBtn).on('click', function (event){
                
            $(this).parent().remove();
          
      })
            
        }
        
    }
}