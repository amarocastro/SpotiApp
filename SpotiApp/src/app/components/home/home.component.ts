import { Component, OnInit } from '@angular/core';
//import { runInThisContext } from 'vm';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{
  
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorItem: any = {};

  constructor( private spotify:SpotifyService) {
  
    this.loading = true;
    this.error = true;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.newReleases = data;
          this.loading = false;
       }, ( errorServicio ) => {
           //console.log(errorServicio);
          this.errorItem = errorServicio;
          this.loading = false;
          this.error = true;
       });
  }

}
