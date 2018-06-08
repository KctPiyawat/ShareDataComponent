import { Component } from '@angular/core';
import {ChildcomponentComponent} from './components/childcomponent/childcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], entryComponents: [ChildcomponentComponent]
})
export class AppComponent {

  // Explicit
  nameParrentString = 'App Component';
  nameChildString = 'Child Componet';

  numberParrentIng = 0;
  numberFromChild = 0;

  onchangeChild(changeNumberFromchild) {
    this.numberFromChild = changeNumberFromchild;
  }

  onClickIncreaseNumberParrent() {

    this
    this.numberParrentIng = this.numberParrentIng + 1;

  }




} // Appcomponent Class
