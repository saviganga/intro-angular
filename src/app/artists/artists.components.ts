import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-artists',
  'templateUrl': './artists.component.html',
  'styleUrls': ['./artists.component.css'],
})
export class ArtistsComponent {
  @Input() artistsList: string[] = [];

}
