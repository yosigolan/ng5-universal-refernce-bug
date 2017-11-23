import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { AppBrowserRoutingModule } from './app.browser.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:   [
    BrowserModule.withServerTransition({appId: 'example-app'}),
    AppModule,
    AppBrowserRoutingModule
  ],
  providers: [

  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
}
