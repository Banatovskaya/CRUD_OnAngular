import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { Idata } from 'src/app/interfaces';

@Component({
  selector: 'app-open-window',
  templateUrl: './open-window.component.html',
  styleUrls: ['./open-window.component.css']
})
export class OpenWindowComponent implements OnInit {

  @Input() isWindowForAddingOpen : boolean;
  @Input() itemForChange : Idata;
  @Output() onChangedState : EventEmitter<boolean> = new EventEmitter();
  @Output() onPostedData : EventEmitter<Idata> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    if(!this.itemForChange.name || !this.itemForChange.unit || (this.itemForChange.price <= 0)) {
      alert('please add data');
      return;
    }
    if (this.itemForChange.id == 0) {
      this.itemForChange.id = localStorage.length + 1
      } 
    const data = {
      id: this.itemForChange.id,
      name: this.itemForChange.name,
      price: this.itemForChange.price,
      unit: this.itemForChange.unit  
    }
    console.log(data)
    this.onPostedData.emit(data)
    this.itemForChange.id = 0;
    this.itemForChange.name = '';
    this.itemForChange.price = 0;
    this.itemForChange.unit = '';
    this.onClose();
  }  
  
  onClose(){
    this.isWindowForAddingOpen = false;
    this.onChangedState.emit(this.isWindowForAddingOpen)
  }

}
