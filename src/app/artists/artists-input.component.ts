import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-artists-input',
  templateUrl: './artists-input.component.html',
  styleUrls: ['./artists-input.component.css',],

})
export class ArtistsInputComponent {
  @Output() createdArtist = new EventEmitter<string>();
  enteredArtist = '';
  onCreateArtist() {
    console.log(this.enteredArtist);
    this.createdArtist.emit(this.enteredArtist)
    this.enteredArtist = ''
  }


}
