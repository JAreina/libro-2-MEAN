import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'jareina-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})



export class PostComponent implements OnInit {
  ngOnInit(): void {
   
  }

  postId = null;
  constructor(private route:ActivatedRoute,
                    private router:Router) {

    // recibe el parametro como un observable
  route.params.subscribe(
  params =>{
  this.postId = parseInt(params['id']);

  // si el parametro es invalido
  if (isNaN(this.postId)) {
    //no muestra en la url /404 skip location 
    this.router.navigateByUrl("/404",{ skipLocationChange: true })
    }
  }
  );
  }

}
