import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ArtistsService } from "./artrists.service";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})

export class ArtistsComponent implements OnInit, OnDestroy {
  artistsList: string[] = [];

  // initialize a variable with 'Subscription' type ( it will be used to subscribe to a created event )
  private subs!: Subscription;

  constructor(private artistsService: ArtistsService) {

  }

  ngOnInit() {

    // use the 'Subscription type' variable to subscribe to the 'subject' created in service for live updates of the resource in the service
    this.subs = this.artistsService.artistChanged.subscribe(artists => {

      // set the list coming from subscription to artistslist
      this.artistsList = artists
    })

    // make a request to a server using the function in app service
    this.artistsService.getArtist()
  }

  onDeleteArtist(artistName: string) {
    this.artistsService.deleteArtist(artistName)
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
