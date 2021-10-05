import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ArtistsAppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArtistsInputComponent } from './artists/artists-input.component';
import { ArtistsComponent } from './artists/artists.components';

@NgModule({
  declarations: [
    AppComponent, ArtistsComponent, ArtistsInputComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ArtistsAppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
