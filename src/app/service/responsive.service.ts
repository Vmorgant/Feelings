import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  nbColonnes: number;
  largeurEcran = window.innerWidth;
  constructor() {}

  /**
   * Responsive
   * Ajuste le nombre de colonne en fonction de la largeur de l'écran.
   * @param event
   */
  SetNombreColonne(event = null){
    if (event){
      this.largeurEcran = event.target.innerWidth;
    }
    if (this.largeurEcran > 768){
      this.nbColonnes = 4;
    }
    else if (this.largeurEcran > 420){
      this.nbColonnes = 2;
    }
    else {
      this.nbColonnes = 1;
    }
  }
}
