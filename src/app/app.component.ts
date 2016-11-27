import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.bootstrap.scss'],
})


export class AppComponent {
  title = 'app works!';
  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;

}
