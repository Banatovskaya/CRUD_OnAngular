import { Component, OnInit } from '@angular/core';
import { Idata } from 'src/app/interfaces';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css']
})
export class DirectoryListComponent implements OnInit {
  list : Idata[] = [  //just for first loading to localStorage - you can delete 
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
  ];
  dataList : Idata[];
  isWindowForAddingOpen : boolean;
  itemForChange : Idata = {
    id: 0,
    name: '',
    price: 0,
    unit: ''
  };
  constructor(private request: RequestService) { };

  ngOnInit(): void {
    this.isWindowForAddingOpen = false;

    // just for first loading to localStorage - you can delete 
    for(let i = 0; i< this.list.length; i++){
      this.request.postData(this.list[i])
    }
    //
    this.dataList = (this.request.getData()).sort((a, b) => (a.id - b.id));
  }

  showWindowForAdd(isOpen:boolean) {
    this.isWindowForAddingOpen = isOpen;
    //the fields of form must be empty. They aren`t epmty after setDataForOpenWindow
    this.itemForChange = { 
      id: 0,
      name: '',
      price: 0,
      unit: ''
    }
  }
  
  postData (data:Idata) {
    this.request.postData(data);
    let filteredItem = this.dataList.filter(el => (el.id != data.id))
    this.dataList = ([...filteredItem, data]).sort((a, b) => (a.id - b.id));
  }

  //set data for form if we want to change item
  setDataForOpenWindow(item : Idata){
    this.itemForChange = item;
  }
}
