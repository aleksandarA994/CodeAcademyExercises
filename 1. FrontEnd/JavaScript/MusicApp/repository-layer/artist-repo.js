import {Artist} from '../entities/artist.js';

export function ArtistRepository() {

    this.getArtistInfo = async function(artistName) {
        try {
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" 
            + artistName + "&api_key=fd6cd01d92f7d2320a684d139626e02d&format=json");
            var data = await response.json();
            console.log("Response from getArtistInfo API", data);
            return new Artist(data.artist);
        } catch(jamesBond) {
            return jamesBond;
        }

    }

        this.getTopAlbums = async function(artistName) {
            try {
                var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" 
                + artistName + "&api_key=fd6cd01d92f7d2320a684d139626e02d&format=json");
                var albumData = await response.json();
                console.log("Response from getTopAlbums API", albumData);
                return albumData.topalbums.album.map((album) => {
                    return album.name;
                })
                } catch (jamesBond) {
                return jamesBond;
            }
        }

        
        this.getTopTracks = async function(artistName) {
            try {
                var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" 
                + artistName + "&api_key=fd6cd01d92f7d2320a684d139626e02d&format=json");
                var trackData = await response.json();
                console.log("Response from getTopTracks API", trackData);
                return trackData.toptracks.track.map((track) => {
                    return track.name;
                })
                } catch (jamesBond) {
                return jamesBond;
            }
        }

        
    //     this.searchArtist = async function(artistName) {


    //         try {
    //             var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" 
    //             + artistName + "&api_key=fd6cd01d92f7d2320a684d139626e02d&format=json");
    //             var searchData = await response.json();
    //             console.log("Response from searchInfo API", searchData );
    //             // return searchData.artistName.map((artist) => {
    //                 // return new Artist;
    //             // })
             
    //     }
    // }
    
}
  