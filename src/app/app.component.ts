import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular';
  artists = ['wizkid', 'mr eazi', 'burna boy'];

  onCreateArtist(artistName: string) {
    this.artists.push(artistName)
    console.log(this.artists)

  }
}
