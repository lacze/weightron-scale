import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/calculate.service';
import { ScaleService } from 'src/app/scale.service';

@Component({
  selector: 'app-sum-weight',
  templateUrl: './sum-weight.component.html',
  styleUrls: ['./sum-weight.component.scss']
})
export class SumWeightComponent implements OnInit {
  public sumWeight: number = 0;
  private sumWeightList: number[] = [];
  private weighChangeSubscription: any;
  constructor(private calculateService: CalculateService, private scaleService: ScaleService) { }

  ngOnInit(): void {
    this.weighChangeSubscription = this.scaleService.getWeighChangedEmitter()
      .subscribe(value => this.updateSumWeightList(value));
  }

  ngOnDestroy(): void {
    this.weighChangeSubscription.unsubscribe();
  }

  private updateSumWeightList(weigh: number) {
    this.sumWeightList.push(weigh);
    this.sumWeight = this.calculateCurrentSum();
  }
  private calculateCurrentSum(): number {
    return this.calculateService.calculateSum(this.sumWeightList);
  }

}
