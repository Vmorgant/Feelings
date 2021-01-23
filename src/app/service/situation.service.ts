import { Injectable } from '@angular/core';
import {Situation} from '../situation';
import ListeSituation from '../../assets/situation.json';

@Injectable({
  providedIn: 'root'
})
export class SituationService {
  Situations: Situation[];
  constructor() {
    this.Situations = ListeSituation;
  }

  /**
   * Renvoie une situation aléatoire
   * @param Situations l'emsemble des situations contenue dans le json emotionsPositives.json
   */
  SituationAleatoire(Situations) {
    return Situations[Math.floor(Math.random() * Situation.length)];
  }
}
