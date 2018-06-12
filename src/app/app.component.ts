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
  nameChildString = 'Child Component';
  namePlaceHolder = 'Your Name ';

  numberParrentIng = 0;
  numberFromChild = 0;
  nameInputParrentString = '';
  nameInputSentToChild = '';


  onClickSentToChild(nameString) {
    this.nameInputParrentString = nameString;
    this.nameInputSentToChild = 'Name Input From Parrent ==>  ' +  nameString;

  }

  onchangeChild(changeNumberFromchild) {
    this.numberFromChild = changeNumberFromchild;
  }

  onClickIncreaseNumberParrent() {


    this.numberParrentIng = this.numberParrentIng + 1;

  }




} // Appcomponent Class
