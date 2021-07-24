import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public resetWeigh(): void {
    console.log("Reset weigh called");
  }
}
