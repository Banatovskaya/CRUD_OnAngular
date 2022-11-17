import { Component, OnInit } from '@angular/core';
import { Idata } from 'src/app/interfaces';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css']
})
export class DirectoryListComponent implements OnInit {
  list: Idata[] = [
    { id:1,
      name: 'milk',
      price: 40,
      unit: 'litre'
    },
    { id:2,
      name: 'bread',
      price: 10,
      unit: 'pcs'
    },
  ]
  isWindowForAddingOpen:boolean;
  constructor() { }

  ngOnInit(): void {
    this.isWindowForAddingOpen = false;
  }

  showWindowForAdd () {
    this.isWindowForAddingOpen = true;
    console.log(this.isWindowForAddingOpen)
  }
  
  closeWindowForAdd(isOpen:boolean) {
    this.isWindowForAddingOpen = isOpen
  }
}
