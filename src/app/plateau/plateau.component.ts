import {Component, Input, OnInit} from '@angular/core';
import {Emotion} from '../emotion';
import ListeSituation from '../../assets/situation.json';
import {Situation} from '../situation';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EmotionService} from '../service/emotion.service';
import {SituationService} from "../service/situation.service";
@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.css']
})
export class PlateauComponent implements OnInit{
  @Input() modeDemonstration: boolean;
  @Input() typeCarte: string;
  /***
   * Représentation du plateau de jeu
   */
  // Pour responsive
  nbColonnes: number;
  largeurEcran = window.innerWidth;

  constructor(private snackBar: MatSnackBar, public emotionService: EmotionService, public situationService: SituationService) {}
  ngOnInit(){
    this.SetNombreColonne();

    this.NouvellePartie();
    // this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

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

  /**
   * Retire une carte de l'ensemble et la remplace par une carte présentant le même type d'émotion
   * @param emotion L'émotion de la carte choisie
   */
  Retirer(emotion: Emotion) {
    if (this.modeDemonstration === true) {
      this.openSnackBar('Cette fonctionnalité n\'est pas disponible en mode démonstration', ' ');
    }
    else {
        let replace = false;
        do {
          const emo = this.emotionService.EmotionAvecType(emotion.Type);
          if (!(this.emotionService.emotions.includes(emo))) {
            this.emotionService.emotions.splice(this.emotionService.emotions.indexOf(emotion), 1, emo);
            replace = true;
          }
        } while (!replace);
    }
  }

  /**
   * Permet de lancer une partie en supprimant les cartes du tableau et en tirant 8 nouvelles émotions
   */
  NouvellePartie() {
    this.emotionService.emotions.splice(0, 7);
    if (this.modeDemonstration === true) {
      this.emotionService.EmotionsDebutants();
    }
    else
    {
      this.emotionService.EmotionsAleatoires();
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {duration : 4000});
  }
}
