import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PostsComponent} from "./posts.component";
import {PostComponent} from "./post/post.component";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PostCreatorComponent } from './post-creator/post-creator.component';
import { CreatePostFormularioComponent } from './create-post-formulario/create-post-formulario.component';
import { FormsModule } from '@angular/forms';


// estrategia de precarga load children
const ROUTES = [{
  path: "posts",
  component: PostsComponent,
  children: [
    {
      path: ":id",
      component: PostComponent
    }
  ]
  
}, {
  path: "posts/:id",
  component: PostComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgbModule,FormsModule
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostCreatorComponent,
    CreatePostFormularioComponent
  ]
})
export class PostsModule { }
