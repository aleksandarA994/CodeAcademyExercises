import {Track} from '../entities/track.js';

export function TrackRepository() {

    this.getTrackInfo = async function(artistName, trackNames) {
        var tracks=[];
        for (var index = 0; index< trackNames.length; index++){
        try {
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=fd6cd01d92f7d2320a684d139626e02d&artist=" 
            + artistName + "&track=" + trackNames[index] + "&format=json");
           
            var data = await response.json();
            //  console.log(data);         
            tracks.push(new Track(data.track));
        } catch(jamesBond) {
            return jamesBond;
        }

    }

        return tracks;
    
    }
}  