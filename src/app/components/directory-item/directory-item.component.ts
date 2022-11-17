import { Component, OnInit, Input } from '@angular/core';
import { Idata } from 'src/app/interfaces';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.css']
})
export class DirectoryItemComponent implements OnInit {
  @Input()item: Idata;

  constructor() { }

  ngOnInit(): void {
  }
}
