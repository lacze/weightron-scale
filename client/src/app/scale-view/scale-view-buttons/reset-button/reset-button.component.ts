import { Component, OnInit } from '@angular/core';
import { ScaleService } from 'src/app/scale.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent implements OnInit {

  constructor(private scaleService: ScaleService) { }

  ngOnInit(): void {
  }

  public resetWeigh(): void {
    console.log(`ResetButtonComponent/resetWeigh: Resetting current weigh.`);
    this.scaleService.resetCurrentSum();
  }
}
