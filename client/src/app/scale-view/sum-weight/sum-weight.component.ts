import { Component, OnInit } from '@angular/core';
import { ScaleService } from 'src/app/scale.service';

@Component({
  selector: 'app-sum-weight',
  templateUrl: './sum-weight.component.html',
  styleUrls: ['./sum-weight.component.scss']
})
export class SumWeightComponent implements OnInit {
  public sumWeight: number = 0;
  public sumWeightList: number[] = [];
  private weighChangeSubscription: any;
  constructor(private scaleService: ScaleService) { }

  ngOnInit(): void {
    this.weighChangeSubscription = this.scaleService.getWeighChangedEmitter()
      .subscribe(value => {
        this.updateSumWeightList(value);
        console.log(`SumWeightComponent/weighChangeSubscription: Value changed to ${value}`);
      });
      this.sumWeight = this.scaleService.getLastSum();
      console.log(`SumWeightComponent/ngOnInit: initializing with value '${this.sumWeight}'`);
  }

  ngOnDestroy(): void {
    this.weighChangeSubscription.unsubscribe();
  }

  private updateSumWeightList(weigh: number) {
    this.sumWeightList.push(weigh);
    this.updateCurrentSum(this.scaleService.getCurrentSum());
    console.log(`SumWeightComponent/updateSumWeightList: value changed and current value is '${this.sumWeight}'`);
  }
  
  private updateCurrentSum(sum: number) {
    this.sumWeight = sum;
  }

}
