import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weight',
  templateUrl: './current-weight.component.html',
  styleUrls: ['./current-weight.component.scss']
})
export class CurrentWeightComponent implements OnInit {

  public currentWeight: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
