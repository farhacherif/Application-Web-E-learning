import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css']
})
export class PageAcceuilComponent implements OnInit {
  divHeight: any;
  


  constructor() { }

  ngOnInit(): void {
  }
  @HostListener("window:resize")
  onResize() {
    this.divHeight = window.innerHeight - 202;  
  }

}
