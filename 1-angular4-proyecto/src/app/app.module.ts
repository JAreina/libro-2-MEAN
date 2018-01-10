import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { BotonService } from './services/boton.service';
@NgModule({
  declarations: [
    AppComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BotonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
