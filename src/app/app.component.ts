import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Feelings';

  AfficherRegles() {
    alert('regle');
    /*TODO afficher la page de règle*/
  }
}
