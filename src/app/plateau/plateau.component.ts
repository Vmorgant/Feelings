import {Component} from '@angular/core';
import {Emotion} from '../emotion';
import ListeSituation from '../../assets/situation.json';
import ListeEmotion from '../../assets/emotion.json';
import {Situation} from '../situation';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.css']
})
export class PlateauComponent {
  /***
   * Représentation du plateau de jeu
   */
  Situations: Situation[];
  EmotionsGlobales: Emotion[];
  emotions: Array<Emotion> = new Array<Emotion>();
  situation: Situation;

  constructor() {
    this.Situations = ListeSituation;
    this.EmotionsGlobales = ListeEmotion;
    this.situation = this.SituationAleatoire(this.Situations);
    this.EmotionsAleatoires();
  }

  /**
   * Action lors du choix de l'émotion
   * @param emotion L'émotion de la carte choisie
   */
  Choisir(emotion: Emotion) {
    alert(emotion.Nom);
  }

  /**
   * Retire une carte de l'ensemble et la remplace par une carte présentant le même type d'émotion
   * @param emotion L'émotion de la carte choisie
   */
  Retirer(emotion: Emotion) {
    this.emotions.splice(this.emotions.indexOf(emotion), 1);
    this.emotions.push(this.EmotionAvecType(emotion.Type));
  }

  /**
   * Renvoie une situation aléatoire
   * @param Situations l'emsemble des situations contenue dans le json emotion.json
   */
  SituationAleatoire(Situations) {
    return Situations[Math.floor(Math.random() * Situation.length)];
  }

  /**
   * Selection de 8 émotions aléatoires différentes à présenter au joueur
   */
  EmotionsAleatoires() {
    do {
      const emotionAleat: Emotion = this.EmotionAleatoire();
      if (this.emotions.find(emo => emo.Nom === emotionAleat.Nom) === undefined) {
        this.emotions.push(emotionAleat);
      }
    } while (this.emotions.length < 8);
  }

  /**
   * Renvoie d'une émotion aléatoire
   */
  EmotionAleatoire(): Emotion {
    return this.EmotionsGlobales[Math.floor(Math.random() * this.EmotionsGlobales.length)];
  }

  /**
   * Renvoie d'une émotion aléatoire selon le type donné en paramètre
   * @param Type le type d'émotion souhaité
   */
  EmotionAvecType(Type: string): Emotion {
    let emotionAleat: Emotion = new Emotion('null', 'null');
    do {
      emotionAleat = this.EmotionAleatoire();
    } while (emotionAleat.Type !== Type);

    return emotionAleat;
  }
}
