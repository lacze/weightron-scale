import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Result } from 'src/app/result';
import { ScaleService } from 'src/app/scale.service';

@Component({
  selector: 'app-weigh-button',
  templateUrl: './weigh-button.component.html',
  styleUrls: ['./weigh-button.component.scss']
})
export class WeighButtonComponent implements OnInit {

  @Output() weighToggled = new EventEmitter<number>();
  
  constructor(private scaleService: ScaleService) { }

  ngOnInit(): void {
  }

  public calculateWeigh(): void {
    const randomWeight = Math.floor(Math.random() * 100) + 1;
    const currentTime = new Date().toLocaleString();
    const result: Result = {timestamp: currentTime, weigh: randomWeight}
    console.log("Calculate weigh called", result);
    this.scaleService.addToListOfSums(result);
    this.scaleService.setLastWeigh(result.weigh);
  }
}
