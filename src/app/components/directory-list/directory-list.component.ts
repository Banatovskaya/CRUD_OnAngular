import { Component, OnInit } from '@angular/core';
import { Idata } from 'src/app/interfaces';
import { RequestService } from 'src/app/services/request.service';

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
  constructor(private request: RequestService) { }

  ngOnInit(): void {
    this.isWindowForAddingOpen = false;
  }

  showWindowForAdd(isOpen:boolean) {
    this.isWindowForAddingOpen = isOpen;
  }
  
  postData (data:Idata) {
    
    console.log(data)
    this.request.postData(data)
    this.list.push(data)
  }
}
