import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';

import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ErrorComponent } from './components/shared/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    LoadingComponent,
    DomseguroPipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true} )
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
