import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalRegleComponent} from './modal-regle/modal-regle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feelings';
  typeCarte = 'Souris';
  constructor(private dialog: MatDialog) {
  }

  afficherRegles() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    this.dialog.open(ModalRegleComponent, dialogConfig);
  }
}

