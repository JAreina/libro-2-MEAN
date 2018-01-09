import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AutorComponent } from '../componentes/autor/autor.component';
import { PostsComponent } from '../componentes/posts/posts.component';
import { HomeComponent } from '../componentes/home/home.component';
import { PageNotFoundComponent } from '../componentes/page-not-found/page-not-found.component';
import { PostComponent } from '../componentes/posts/post/post.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
    },
  {
path: "posts",
component: PostsComponent,
children:[{   // ruta hija con router-outlet en el padre posts
  path:":id",
  component:PostComponent
}]
},
{
path: "autor",
component: AutorComponent
},
{
  path: "**",
  component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
