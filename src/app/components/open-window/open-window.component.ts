import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-open-window',
  templateUrl: './open-window.component.html',
  styleUrls: ['./open-window.component.css']
})
export class OpenWindowComponent implements OnInit {
// isWindowForAddingOpen:boolean = false;
  @Input()isWindowForAddingOpen:boolean
  @Output() onChangedState: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    // this.isWindowForAddingOpen = true;
    console.log("hide",this.isWindowForAddingOpen)
  }

  onClose(){
    this.isWindowForAddingOpen = false;
    console.log("close")
    console.log(this.isWindowForAddingOpen)
    this.onChangedState.emit(this.isWindowForAddingOpen)
  }

}
