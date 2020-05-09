import {Component, Input, OnInit} from '@angular/core';
import {Emotion} from '../emotion';
import ListeSituation from '../../assets/situation.json';
import ListeEmotionPositives from '../../assets/emotionsPositives.json';
import ListeEmotionNegatives from '../../assets/emotionsNegatives.json';
import ListeEmotionDecouverte from '../../assets/emotionDecouvertes.json';
import ListeEmotionNeutres from '../../assets/emotionsNeutres.json';
import {Situation} from '../situation';
import {MatSnackBar} from '@angular/material/snack-bar';
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
  Situations: Situation[];
  EmotionsPositives: Emotion[];
  EmotionsNegatives: Emotion[];
  EmotionsNeutres: Emotion[];
  emotions: Array<Emotion> = new Array<Emotion>();
  situation: Situation;
  nbColonnes;
  largeurEcran = window.innerWidth;
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(){
    this.SetNombreColonne();
    this.Situations = ListeSituation;
    this.EmotionsPositives = ListeEmotionPositives;
    this.EmotionsNegatives = ListeEmotionNegatives;
    this.EmotionsNeutres = ListeEmotionNeutres;
    this.NouvellePartie();
  }

  /**
   * Ajuste le nombre de colonne en fonction de la largeur de l'écran.
   */
  SetNombreColonne(){
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
          const emo = this.EmotionAvecType(emotion.Type);
          if (!(this.emotions.includes(emo))) {
            this.emotions.splice(this.emotions.indexOf(emotion), 1, emo);
            replace = true;
          }
        } while (!replace);
    }
  }

  /**
   * Renvoie une situation aléatoire
   * @param Situations l'emsemble des situations contenue dans le json emotionsPositives.json
   */
  SituationAleatoire(Situations) {
    return Situations[Math.floor(Math.random() * Situation.length)];
  }
  /**
   * Selection de 8 émotions aléatoires différentes à présenter au joueur
   */
  EmotionsAleatoires() {
    do {
      const emotionAleat: Emotion = this.EmotionAvecType('Positive');
      if (this.emotions.find(emo => emo.Nom === emotionAleat.Nom) === undefined) {
        this.emotions.push(emotionAleat);
      }
    } while (this.emotions.length < 3);
    do {
      const emotionAleat: Emotion = this.EmotionAvecType('Negative');
      if (this.emotions.find(emo => emo.Nom === emotionAleat.Nom) === undefined) {
        this.emotions.push(emotionAleat);
      }
    } while (this.emotions.length < 6);
    do {
      const emotionAleat: Emotion = this.EmotionAvecType('Neutre');
      if (this.emotions.find(emo => emo.Nom === emotionAleat.Nom) === undefined) {
        this.emotions.push(emotionAleat);
      }
    } while (this.emotions.length < 8);
  }

  /**
   * Renvoie d'une émotion aléatoire selon le type donné en paramètre
   * @param Type le type d'émotion souhaité
   */
  EmotionAvecType(Type: string): Emotion {
    let emotionAleat: Emotion;
    if (Type === 'Positive') {
      emotionAleat = this.EmotionsPositives[Math.floor(Math.random() * this.EmotionsPositives.length)];
    } else if (Type === 'Negative') {
      emotionAleat = this.EmotionsNegatives[Math.floor(Math.random() * this.EmotionsNegatives.length)];
    } else {
      emotionAleat = this.EmotionsNeutres[Math.floor(Math.random() * this.EmotionsNeutres.length)];
    }
    return emotionAleat;
  }

  /**
   * Selection de 8 émotions aléatoires différentes de niveau débutant à présenter au joueur
   */
  EmotionsDebutants() {
    this.emotions = ListeEmotionDecouverte;
  }
  /**
   * Permet de lancer une partie en supprimant les cartes du tableau et en tirant 8 nouvelles émotions
   */
  NouvellePartie() {
    this.emotions.splice(0, 7);
    if (this.modeDemonstration === true) {
      this.EmotionsDebutants();
    }
    else
    {
      this.EmotionsAleatoires();
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {duration : 4000});
  }
}
