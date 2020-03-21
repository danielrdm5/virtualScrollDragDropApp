import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  constructor() { }


  persons = Array(500).fill(0);


  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  ngOnInit(): void {
  }


  irFinal() {
    this.viewport.scrollToIndex( this.persons.length );
  }

irMitad() {
  this.viewport.scrollToIndex( this.persons.length / 2 );
}

  irInicio() {
    this.viewport.scrollToIndex( 0 );
  }
}
