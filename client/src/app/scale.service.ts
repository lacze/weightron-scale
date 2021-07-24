import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { CalculateService } from './calculate.service';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {

  private currentResults: Result[] = [];
  private currentSums: number[] = [];
  private lastWeigh: number = 0;

  private weighChangeEmitter: EventEmitter<number> = new EventEmitter();

  constructor(private calculateService: CalculateService) { }

  public addToListOfSums(result: Result): void {
    console.log(`Scale service added ${result} to list of sums`, this.currentResults);
    this.currentResults.push(result);
  }

  public getHistoryList(): Result[] {
    console.log(`ScaleService/getHistoryList`);
    return this.currentResults;
  }

  public getSumList(): number[] {
    console.log(`ScaleService/getSumList`);
    return this.currentSums;
  }

  public setLastWeigh(weigh: number) {
    console.log(`ScaleService/setLastWeigh, emitting change: '${weigh}' to subscribers.`);
    this.lastWeigh = weigh;
    this.currentSums.push(weigh);
    this.weighChangeEmitter.emit(weigh);
  }

  public getLastWeigh() {
    console.log(`ScaleService/getLastWeigh`);
    return this.lastWeigh;
  }

  public getWeighChangedEmitter() {
    console.log(`ScaleService/getWeighChangedEmitter`);
    return this.weighChangeEmitter;
  }

  public getCurrentSum(): number {
    console.log(`ScaleService/getCurrentSum`);
    return this.calculateService.calculateSum(this.currentSums);
  }

  public resetCurrentSum(): void {
    console.log(`ScaleService/resetCurrentSum`);
    this.currentSums = [];
    this.weighChangeEmitter.emit(0);
    this.lastWeigh = 0;
  }

}
