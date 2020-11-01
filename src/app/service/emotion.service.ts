import { Injectable } from '@angular/core';
import {Emotion} from '../emotion';
import ListeEmotionDecouverte from '../../assets/emotionDecouvertes.json';
import ListeEmotionPositives from '../../assets/emotionsPositives.json';
import ListeEmotionNegatives from '../../assets/emotionsNegatives.json';
import ListeEmotionDecouverte from '../../assets/emotionDecouvertes.json';
import ListeEmotionNeutres from '../../assets/emotionsNeutres.json';
@Injectable({
  providedIn: 'root'
})
export class EmotionService {
  EmotionsPositives: Emotion[];
  EmotionsNegatives: Emotion[];
  EmotionsNeutres: Emotion[];
  emotions: Array<Emotion> = new Array<Emotion>();
  constructor() {
    this.EmotionsPositives = ListeEmotionPositives;
    this.EmotionsNegatives = ListeEmotionNegatives;
    this.EmotionsNeutres = ListeEmotionNeutres;
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
}
