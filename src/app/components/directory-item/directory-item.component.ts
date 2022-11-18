import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Idata } from 'src/app/interfaces';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.css']
})
export class DirectoryItemComponent implements OnInit {
  @Input()item: Idata;
  // @Input()isWindowForAddingOpen:boolean
  @Output() onChangedState: EventEmitter<boolean> = new EventEmitter();
  @Output() onChangedData: EventEmitter<Idata> = new EventEmitter();
  
  isWindowForAddingOpen:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  showWindowForAdd () {
    this.isWindowForAddingOpen = true;
    this.onChangedState.emit(this.isWindowForAddingOpen)
    this.onChangedData.emit(this.item)
    console.log(this.item)
  }


}
