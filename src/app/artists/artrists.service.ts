import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

 @Injectable({providedIn: 'root'})
 export class ArtistsService {

  constructor(private request: HttpClient) {}
  artists = ['wizkid'];

  // create a subscription service to push changes to class properties to oyher components
  artistChanged = new Subject<string[]>()

  getArtist() {

    // function sends http requests to a server

    // make a request to the server
    this.request.get<any>('https://swapi.dev/api/people')
    // pipe the response (use map from rxjs to filter request response)
    .pipe(map(responseData => {
      // map function gets the field (artist.name) we want from the list
      return responseData.results.map((artist: any) => artist.name)
    }))
    .subscribe(response => {
      // send returned response updates through the subject emitter
      this.artistChanged.next(response)
    });

  }

  addArtist(artistName: string) {

    // function to add artists to the list

    console.log(artistName)
//    this.artists.push(artistName)
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
