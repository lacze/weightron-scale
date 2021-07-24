import { Component, OnInit } from '@angular/core';
import { ScaleService } from 'src/app/scale.service';

@Component({
  selector: 'app-current-weight',
  templateUrl: './current-weight.component.html',
  styleUrls: ['./current-weight.component.scss']
})
export class CurrentWeightComponent implements OnInit {

  public currentWeight: number = 0;
  private weighChangeSubscription: any;

  constructor(private scaleService: ScaleService) { }

  ngOnInit(): void {
    this.weighChangeSubscription = this.scaleService.getWeighChangedEmitter()
      .subscribe(value => this.updateCurrentWeight(value));
  }

  private updateCurrentWeight(weigh: number) {
    this.currentWeight = weigh;
  }

}
