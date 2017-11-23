import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserOnlyComponent } from './browser-only.component';

const routes: Routes = [
  {path: '', component: BrowserOnlyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowserOnlyRoutingModule {
}
