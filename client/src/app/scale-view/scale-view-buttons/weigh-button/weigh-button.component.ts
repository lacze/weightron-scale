import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weigh-button',
  templateUrl: './weigh-button.component.html',
  styleUrls: ['./weigh-button.component.scss']
})
export class WeighButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public calculateWeigh(): void {
    console.log("Calculate weigh called");
  }
}
