import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

const routes: Routes = [
  {path: '', component: FrontpageComponent},
  // directs all other routes to the main page
  {path: '**', component: LoadingScreenComponent}
];

@NgModule({
  // as default we set the desktop routing configuration. if mobile will be started it will be replaced below.
  // note that we must specify some routes here (not an empty array) otherwise the trick below doesn't work...
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppServerRoutingModule {


}


