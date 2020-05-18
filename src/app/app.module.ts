import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobeComponent } from './animations/globe/globe.component';
import { HelloBootstrapComponent } from './components/hello-bootstrap/hello-bootstrap.component';
import { ColAdminComponent } from './components/col-admin/col-admin.component';
import { NavComponent } from './components/nav/nav.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModalComponent } from './components/modal/modal.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobeComponent,
    HelloBootstrapComponent,
    ColAdminComponent,
    NavComponent,
    CarouselComponent,
    ScrollspyComponent,
    CardsComponent,
    ModalComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
