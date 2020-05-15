import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobeComponent } from './animations/globe/globe.component';
import { HelloBootstrapComponent } from './components/hello-bootstrap/hello-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobeComponent,
    HelloBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
