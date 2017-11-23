import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';


const routes: Routes = [
  {path: '', component: FrontpageComponent},
  // in order to see it running with angular 5 as well, just comment the below line:
  {path: 'browser-only', loadChildren: 'app/browser-only/browser-only.module#BrowserOnlyModule'},
  // directs all other routes to the main page
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppBrowserRoutingModule {


}


