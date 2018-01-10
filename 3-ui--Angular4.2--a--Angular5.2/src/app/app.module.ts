import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { getLocaleProvider } from "./i18n-providers";
import { FormsModule } from '@angular/forms';
import {RutasRoutingModule } from './rutas/rutas-routing.module';

import { AppComponent } from './app.component';
import { AutorComponent } from './componentes/autor/autor.component';

import { HomeComponent } from './componentes/home/home.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

import {PostsModule} from "./componentes/posts/posts.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    
    HomeComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,

    RutasRoutingModule ,FormsModule,
    PostsModule,   // PostComponente, y PostsComponente
    NgbModule.forRoot()
  ],
  providers: [ { provide: LOCALE_ID, useValue: getLocaleProvider } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
