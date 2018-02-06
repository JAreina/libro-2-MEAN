import { Component, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'jareina-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.scss']
})
export class PostCreatorComponent implements OnInit {
@Output() open = new EventEmitter();

  constructor() { }

// LANZAR EL MODAL 
launch(event){
  this.open.emit(event);
}


  ngOnInit() {
  }

}
