import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Feelings';

  // tslint:disable-next-line:variable-name
  constructor() {
  }

  /**
   * Affiche la page contenant les règles du jeu
   */
  AfficherRegles() {
    alert('regles');
  }
}

