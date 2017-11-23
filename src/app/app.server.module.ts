import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { AppServerRoutingModule } from './app.server.routing.module';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    LoadingScreenComponent
  ],
  imports:      [
    BrowserModule.withServerTransition({appId: 'example-app'}),
    AppModule,
    ServerModule,
    AppServerRoutingModule,
    ModuleMapLoaderModule
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap:    [AppComponent]
})
export class AppServerModule {
}
