import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale-view-buttons',
  templateUrl: './scale-view-buttons.component.html',
  styleUrls: ['./scale-view-buttons.component.scss']
})
export class ScaleViewButtonsComponent implements OnInit {

  @Input() weigh: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
