import {ArtistRepository} from '../repository-layer/artist-repo.js';
import { AlbumRepository } from '../repository-layer/album-repo.js';
import { TrackRepository } from '../repository-layer/track-repo.js';

export function ArtistPageLogic() {

    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    this.trackRepo = new TrackRepository();
    // this.searchInfo = new ArtistRepository();

    this.getDataForArtistPage = async function(artistName) {
        var artistData = await this.artistRepo.getArtistInfo(artistName);
        var albumData = await this.artistRepo.getTopAlbums(artistName);
        var albums = await this.albumRepo.getAlbumInfo(artistName, albumData);
        var trackData = await this.artistRepo.getTopTracks(artistName);
        var tracks = await this.trackRepo.getTrackInfo(artistName, trackData);
        // var searchInfo = await this.artistRepo.searchArtist(artistName);
        
        var pageData = {
            artistInfo: artistData,
            albumData: albums,
            trackData: tracks,
            // searchData: searchInfo
        };

        return pageData;
    }

 

}