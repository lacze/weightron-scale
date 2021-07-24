import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScaleService } from 'src/app/scale.service';

@Component({
  selector: 'app-current-weight',
  templateUrl: './current-weight.component.html',
  styleUrls: ['./current-weight.component.scss']
})
export class CurrentWeightComponent implements OnInit, OnDestroy {

  public currentWeight: number = 0;
  private weighChangeSubscription: any;

  constructor(private scaleService: ScaleService) { }

  ngOnInit(): void {
    this.weighChangeSubscription = this.scaleService.getWeighChangedEmitter()
      .subscribe(value => this.updateCurrentWeight(value));
      this.currentWeight = this.scaleService.getLastWeigh();
  }

  ngOnDestroy(): void {
    this.weighChangeSubscription.unsubscribe();
  }

  private updateCurrentWeight(weigh: number) {
    this.currentWeight = weigh;
  }

}
