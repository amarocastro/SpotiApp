import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAP5swiym2Bf2ch5r00cZAZlfGUxq8SFL0wKPiSTIsipr8wA29e8CFpBmDOeTjccYyM0OcCwnHNqFOdYR8'
    });
    
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?country=ES')
              .pipe( map( data => data['albums'].items ));
  }

  getArtist(termino: string){
    return this.getQuery(`search?q=${ termino }&market=ES&limit=20&type=artist`)
              .pipe( map( data => data['artists'].items ));
  }
}
