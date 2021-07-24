import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {

  public currentSums: Result[] = [];
  private lastWeigh: number = 0;

  private weighChangeEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public addToListOfSums(result: Result): void {
    console.log("Scale service added to list of sums", result);
    this.currentSums.push(result);
  }

  public getHistoryList(): Result[] {
    return this.currentSums;
  }

  public setLastWeigh(weigh: number) {
    this.lastWeigh = weigh;
    this.weighChangeEmitter.emit(weigh);
  }

  public getLastWeigh() {
    return this.lastWeigh;
  }

  public getWeighChangedEmitter() {
    return this.weighChangeEmitter;
  }

}
