import { Component, Output, EventEmitter } from "@angular/core";
import { ArtistsService } from "./artrists.service";

@Component({
  selector: 'app-artists-input',
  templateUrl: './artists-input.component.html',
  styleUrls: ['./artists-input.component.css',],

})
export class ArtistsInputComponent {
  enteredArtist = '';

  constructor(private artistService: ArtistsService ) {

  }

  onCreateArtist() {
    this.artistService.addArtist(this.enteredArtist)
    this.enteredArtist = ''
  }


}
