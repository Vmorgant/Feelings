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
  Situations: Situation[];
  EmotionsGlobales: Emotion[];
  emotions: Array<Emotion> = new Array<Emotion>();
  situation: Situation;
  constructor() {
  this.Situations = ListeSituation;
  this.EmotionsGlobales = ListeEmotion;
  this.situation = this.SituationAleatoire(this.Situations);
  this.EmotionsAleatoires(this.EmotionsGlobales);
  }

  Choisir(emotion: Emotion) {
    alert(emotion.Nom);
  }

  Retirer(emotion: Emotion) {
    this.emotions.splice(this.emotions.indexOf(emotion), 1);
  }
  SituationAleatoire(Situations){
    return Situations[Math.floor(Math.random() * Situation.length)];
  }
  EmotionsAleatoires(EmotionsGlobales) {
    do {
      const emotionAleat: Emotion = EmotionsGlobales[Math.floor(Math.random() * EmotionsGlobales.length)];
      console.log(emotionAleat);
      if (this.emotions.find(emo => emo.Nom === emotionAleat.Nom) === undefined) {
        this.emotions.push(emotionAleat);
      }
      console.log(this.emotions);
    } while (this.emotions.length < 8);
  }
}
