import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobeComponent } from './animations/globe/globe.component';
import { HelloBootstrapComponent } from './components/hello-bootstrap/hello-bootstrap.component';
import { ColAdminComponent } from './components/col-admin/col-admin.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobeComponent,
    HelloBootstrapComponent,
    ColAdminComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
