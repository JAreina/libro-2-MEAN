import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PostsComponent} from "./posts.component";
import {PostComponent} from "./post/post.component";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
    NgbModule
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ]
})
export class PostsModule { }
