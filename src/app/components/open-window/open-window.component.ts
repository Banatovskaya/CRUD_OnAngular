import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import {RequestService} from '../../services/request.service'
import { Idata } from 'src/app/interfaces';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-open-window',
  templateUrl: './open-window.component.html',
  styleUrls: ['./open-window.component.css']
})
export class OpenWindowComponent implements OnInit {
// isWindowForAddingOpen:boolean = false;
  @Input()isWindowForAddingOpen:boolean
  @Output() onChangedState: EventEmitter<boolean> = new EventEmitter();
  @Output() onChangedData: EventEmitter<Idata> = new EventEmitter();
  id:number = 0
  name:string;
  price: number = 0;
  unit:string;
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    if(!this.name || !this.unit || (this.price <= 0)) {
      alert('please add data');
      return;
    }

    if (this.id == 0) {
      this.id = localStorage.length+1
      console.log(this.id)
      } 
    const data = {
      id: this.id,
      name: this.name,
      price: this.price,
      unit: this.unit  
    }
    console.log(data)
    this.onChangedData.emit(data)
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.unit = '';
    this.onClose();
  }
  

  onClose(){
    this.isWindowForAddingOpen = false;
    this.onChangedState.emit(this.isWindowForAddingOpen)
  }

}
