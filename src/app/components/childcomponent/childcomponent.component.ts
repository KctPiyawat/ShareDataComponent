import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {emit} from 'cluster';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  // Explicit
  @Input() nameFromParrent: string;
  @Input() numberFromParrent: number;

  numberChildInt = 0;
  colorChild = '#ff4837';

  @Output() eventIncreaseChild = new EventEmitter();


  onClickIncreaseNuberChild() {

    this.numberChildInt = this.numberChildInt + 1;
    this.eventIncreaseChild.emit(this.numberChildInt);
  }

  constructor() { }

  ngOnInit() {
  }

}
