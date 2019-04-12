import {ArtistPageLogic} from '../business-layer/artist-logic.js';

export function Renderer() {
    this.pageData = null;
    this.mainContainer = $("#main-container");

    this.pageLogic = new ArtistPageLogic();

    var self = this;

    
    this.renderAll = function() {
        console.log(this.pageData);
        
        $('<input>').attr('id', 'searchInput').appendTo(this.mainContainer);
        $('<button>').attr('id', 'searchBtn').text('SEARCH').appendTo(this.mainContainer);
        
       
        $('#searchBtn').on('click', (e) => {
            e.preventDefault();
            console.log('Searching..');
            this.init($('#searchInput').val());
        })


        this.renderTop();
 
        this.renderBottom();
       
    }

    this.renderTop = function(){
        
        var mainHeading = $('<h1>').addClass('main-heading').text('All About Music').appendTo(this.mainContainer);

        var topWrapper = $('<div>').addClass('top-wrapper').appendTo(this.mainContainer);        


        var leftPart = $('<div>').addClass('left-side').appendTo(topWrapper);

        var artistName = $('<div>').addClass('artist-name').appendTo(leftPart);
        $(artistName).text(this.pageData.artistInfo.name);
        
        var artistImage = $('<img>').addClass('artist-image').appendTo(leftPart);
        $(artistImage).attr('src',this.pageData.artistInfo.images[5]['#text']);
        
                

    
        var rightPart = $('<div>').addClass('right-side').appendTo(topWrapper);

        var similarArtist = $('<div>').addClass('similar-artist').text('Similar Artists').appendTo(rightPart);      

        for (var i = 0; i < 4 ; i++){

            var similartImage = $('<img>').addClass('similar-image').attr('id', 'img' + i)
            .attr('src',this.pageData.artistInfo.similar.artist[i].image[2]['#text']).appendTo(rightPart); 
            
            
            
            var similarName = $('<div>').addClass('similar-name').attr('id', 'art' + i)
            .text(this.pageData.artistInfo.similar.artist[i].name).on('click', function(event){
                self.init($(event.target).text());
            }).css('cursor', 'pointer').appendTo(rightPart);
                        
        }

    }

    this.renderBottom = function(){

        var bottomWrapper = $('<div>').addClass('bottom-wrapper').appendTo(this.mainContainer);

        var bottomInfo = $('<div>').addClass('bottom-info').appendTo(bottomWrapper);

        var stats = $('<div>').addClass('stats').appendTo(bottomInfo);
        var p1 = $('<p>').addClass('p1').text('Listeners: '+ this.pageData.artistInfo.statistics.listeners).appendTo(stats);
        var p2 = $('<p>').addClass('p2').text('Playcount: '+ this.pageData.artistInfo.statistics.playcount).appendTo(stats);
        
        

        var tags = $('<div>').addClass('tags').appendTo(bottomInfo);
        
        var tagsInfo = this.pageData.artistInfo.tags.tag;

        for(var index = 0; index<tagsInfo.length; index++){
            $("<p>").text(tagsInfo[index].name).appendTo(tags);
           
        }

        var botContentSum = $('<div>').addClass('content-summary').appendTo(bottomWrapper);

        var summary = $('<div>').addClass('content').appendTo(botContentSum);
        $(summary).text(this.pageData.artistInfo.biography.summary);
        

        var content = $('<div>').addClass('summary').appendTo(botContentSum);
        var para = $('<p>').text('Read more about the artist...').appendTo(content);
        var minBtn = $('<button>').click(function(event){readMore();}).css('display', 'none').text("Minimize").click(function(event){
            // readMore();

            minimize();
        }).addClass('read-button').appendTo(content);
        var readBtn = $('<button>').click(function(event){
            readMore();

            // minimize();
        })
            .text("Read More").addClass('min-button').appendTo(content);

      var infoDiv = $('<div>').css('display','none').addClass('artist-info').appendTo(content);

        $(infoDiv).text(this.pageData.artistInfo.biography.content);


        function readMore(){            
            $(infoDiv).css('display', 'block');
            $(para).text('Click the button to minimize');        
            $(minBtn).css('display', 'block');
            $(readBtn).css('display', 'none');  
            
        }

        function minimize(){            
                $(infoDiv).css('display', 'none');           
                $(para).text('Read more about the artist...');                  
                $(readBtn).css('display', 'block');
                $(minBtn).css('display', 'none');
        }    
        
        var albumsAndTracks = $('<div>').addClass('albums-tracks').appendTo(bottomWrapper);

        var albums = $('<div>').addClass('albums').appendTo(albumsAndTracks);
        var albumsHeading = $('<h1>').text('TOP ALBUMS').addClass('albums-heading').appendTo(albums);

        var tracks = $('<div>').addClass('tracks').appendTo(albumsAndTracks);
        var tracksHeading = $('<h1>').text('TOP TRACKS').addClass('albums-heading').appendTo(tracks);


        for(var i = 0; i<this.pageData.albumData.length; i++){
            var albumSep = $('<div>').text(this.pageData.albumData[i].name).addClass('album-text').appendTo(albums);
            var albumSepImg = $('<img>').attr('src',this.pageData.albumData[i].image[0]["#text"]).appendTo(albumSep);

        }      

        
        for(var i = 0; i<this.pageData.trackData.length; i++){
           var trackSep = $('<div>').text(this.pageData.trackData[i].name).addClass('track-text').appendTo(tracks);
        }
    
       

    }

    this.init = async function(artistName) {
        this.pageData = await this.pageLogic.getDataForArtistPage(artistName);
        this.mainContainer.html("");
        this.renderAll();
    }
}