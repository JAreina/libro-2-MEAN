import { Component, OnInit } from "@angular/core";
import { BlogPostClase } from "../blog-post-clase";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "jareina-create-post-formulario",
  templateUrl: "./create-post-formulario.component.html",
  styleUrls: ["./create-post-formulario.component.scss"],
  
})
export class CreatePostFormularioComponent implements OnInit {
    public titulo:string;
    public contenido: string;
   public model: BlogPostClase;

  constructor(private modalService: NgbModal) {}

  open(content) {
   
    this.modalService.open(content, { backdrop: "static", size: "lg" });
  }

  submit() {
    this.model = new BlogPostClase(this.titulo, this.contenido);
    console.log(JSON.stringify(this.model));
  }
  ngOnInit() {}
}
