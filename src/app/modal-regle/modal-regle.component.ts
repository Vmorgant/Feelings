import { Component, OnInit } from '@angular/core';
import {EmotionService} from '../service/emotion.service';

@Component({
  selector: 'app-modal-regle',
  templateUrl: './modal-regle.component.html',
  styleUrls: ['./modal-regle.component.css']
})
export class ModalRegleComponent implements OnInit {

  constructor(public emotionService: EmotionService) { }

  ngOnInit(): void {
  }

}
