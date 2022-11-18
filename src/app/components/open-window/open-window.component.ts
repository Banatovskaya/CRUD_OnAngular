import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { Idata } from 'src/app/interfaces';

@Component({
  selector: 'app-open-window',
  templateUrl: './open-window.component.html',
  styleUrls: ['./open-window.component.css']
})
export class OpenWindowComponent implements OnInit {
  item : Idata;
// if we @input object - we can change object in parent component 
// but if we just close window without saving we don`t need in changing
  @Input()id : number;
  @Input()name : string;
  @Input()price : number;
  @Input()unit : string;

  @Input() isWindowForAddingOpen : boolean;
  @Input() itemForChange : Idata;
  @Output() onChangedState : EventEmitter<boolean> = new EventEmitter();
  @Output() onPostedData : EventEmitter<Idata> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
    this.item = {
      id: this.id,
      name: this.name,
      price: this.price,
      unit: this.unit
    }
  }

  sendData(){
    if(!this.name || !this.unit || (this.price <= 0)) {
      alert('please add data');
      return;
    }
    if (this.id == 0) {
      this.id = localStorage.length + 1
      } 
    const data = {
      id: this.id,
      name: this.name,
      price: this.price,
      unit: this.unit  
    }
    
    this.onPostedData.emit(data)
    this.onClose();
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.unit = '';
  }  
  
  onClose(){
    this.isWindowForAddingOpen = false;
    this.onChangedState.emit(this.isWindowForAddingOpen)
  }
}
