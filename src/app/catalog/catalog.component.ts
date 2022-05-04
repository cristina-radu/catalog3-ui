import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  title: string = "ASE Catalog App";
  constructor() { }

  ngOnInit(): void {
   // this.title = "ASE Catalog App";
  }

  public onInput(event:any):void {
    this.title = event.target.value;
  }
}
