import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CharactersComponent } from './characters/characters.component';

import { CharactersService } from './services/characters.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
