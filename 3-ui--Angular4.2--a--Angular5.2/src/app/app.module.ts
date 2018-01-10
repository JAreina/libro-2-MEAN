import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
