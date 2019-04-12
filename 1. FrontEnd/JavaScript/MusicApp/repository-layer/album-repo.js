import {Album} from '../entities/album.js';

export function AlbumRepository() {

    this.getAlbumInfo = async function(artistName, albumNames) {
        var albums=[];
        // console.log(albumNames);
        for (var index = 0; index< albumNames.length; index++){
        try {
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getInfo&album=" 
            + albumNames[index] + "&artist="
            + artistName + "&api_key=fd6cd01d92f7d2320a684d139626e02d&format=json");
            var data = await response.json();
            //  console.log(data);         
            albums.push(new Album(data.album));
        } catch(jamesBond) {
            return jamesBond;
        }

    }

        return albums;
    
    }
}   