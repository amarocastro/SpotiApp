import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCXKUmm4MPqlhXO5f0TUI9NfCmzB-V9GIlhWshs1wKkrIVFqEloIgRs5ZKBf4_1JNVNXO3-kn00bcorqq'
    });
    
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?country=ES')
              .pipe( map( data => data['albums'].items ));
  }

  getArtists(termino: string){
    return this.getQuery(`search?q=${ termino }&market=US&limit=20&type=artist`)
              .pipe( map( data => data['artists'].items ));
  }

  getArtist(id: string){

    return this.getQuery(`artists/${ id }`);
              //.pipe( map( data => data['artists'].items ));
  }
  getTopTracks(id: string){

    return this.getQuery(`artists/${ id }/top-tracks?country=US`)
              .pipe( map( data => data['tracks'] ));
  }

}
