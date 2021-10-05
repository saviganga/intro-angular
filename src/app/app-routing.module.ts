import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtistsInputComponent } from "./artists/artists-input.component";
import { ArtistsComponent } from "./artists/artists.components";

const routes: Routes = [
  {path: '', component: ArtistsComponent},
  {path: 'artists-input', component: ArtistsInputComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class ArtistsAppRoutingModule {

}
