import { Injectable } from '@angular/core';
import { Idata } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
data: Idata[] =[];
  constructor() { }

  getData() {
    for(let i = 0; i < localStorage.length; i++) {
      let key: any;
      key = localStorage.key(i);
      let object: any = localStorage.getItem(key);
      object = JSON.parse(object);
      this.data = [...this.data, object];
    }
    return this.data;
  }

  postData(dataItem : Idata) {
    let key: string = (dataItem.id).toString();
    let dataString: string = JSON.stringify(dataItem);
    localStorage.setItem(key, dataString);
  }

  deleteData(dataItem : Idata) {
    localStorage.removeItem((dataItem.id).toString());
  }
}