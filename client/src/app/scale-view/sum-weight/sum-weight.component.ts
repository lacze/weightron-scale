import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-weight',
  templateUrl: './sum-weight.component.html',
  styleUrls: ['./sum-weight.component.scss']
})
export class SumWeightComponent implements OnInit {
public sumWeight = "500 (placeholder)";
  constructor() { }

  ngOnInit(): void {
  }

}
