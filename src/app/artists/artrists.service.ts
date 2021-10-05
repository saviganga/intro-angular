import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

 @Injectable({providedIn: 'root'})
 export class ArtistsService {

  artists = ['wizkid', 'mr eazi', 'burna boy'];

  // create a subscription service to push changes to class properties to oyher components
  artistChanged = new Subject<string[]>()

  addArtist(artistName: string) {

    // function to add artists to the list

    console.log(artistName)
    this.artists.push(artistName)
    console.log(this.artists)

    // send updates of this array to the subscription event subscribers
    this.artistChanged.next(this.artists)
  }

  deleteArtist(artistName: string) {

    // function to delete artists from the list

    this.artists = this.artists.filter(artist => artist !==  artistName)
    console.log(this.artists)

    // send updates of this array to the subscription event subscribers
    this.artistChanged.next(this.artists)

  }
 }
