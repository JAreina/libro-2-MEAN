import { Component } from '@angular/core';

import { RutasRoutingModule } from './rutas/rutas-routing.module';

@Component({
  selector: 'jareina-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[RutasRoutingModule]
})
export class AppComponent {
  title = 'jareina';
}
