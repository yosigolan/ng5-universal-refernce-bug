import { BrowserOnlyComponent } from './browser-only.component';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { BrowserOnlyRoutingModule } from './browser-only.routing.module';

@NgModule({
  declarations: [
    BrowserOnlyComponent
  ],
  imports:      [
    BrowserOnlyRoutingModule,
    DragulaModule
  ],
  providers:    [

  ]
})
export class BrowserOnlyModule {
}
