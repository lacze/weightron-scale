import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { CalculateService } from './calculate.service';
import { Result } from './result';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {

  private currentResults: Result[] = [];
  private currentSums: number[] = [];
  private lastWeigh: number = 0;
  private lastSums: number[] = [];

  private historyResultsStorageKey = 'historyResults';
  private lastSumStorageKey = 'lastSum';
  private lastWeighStorageKey = 'lastWeigh';

  private weighChangeEmitter: EventEmitter<number> = new EventEmitter();

  constructor(private calculateService: CalculateService, private localStorage: LocalStorageService) {
    this.initValuesFromStorage();
  }

  public addToListOfSums(result: Result): void {
    console.log(`Scale service added to list of sums`, this.currentResults);
    this.currentResults.push(result);

    console.log(`ScaleService/addToListOfSums: Preparing to save necessary data to localstorage`);
    this.localStorage.store(this.historyResultsStorageKey, this.currentResults);
    this.localStorage.store(this.lastWeighStorageKey, result.weigh);
    this.localStorage.store(this.lastSumStorageKey, this.currentSums);
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
    this.currentSums.push(weigh);
    this.lastWeigh = weigh;
    this.lastSums = this.currentSums;
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
    const currentSum = this.calculateService.calculateSum(this.currentSums);
    console.log(`ScaleService/getCurrentSum`, currentSum);
    this.lastSums = this.currentSums;
    return currentSum;
  }

  public getLastSum(): number {
    console.log(`ScaleService/getCurrentSum`, this.calculateService.calculateSum(this.currentSums));
    return this.calculateService.calculateSum(this.lastSums);
  }

  public resetCurrentSum(): void {
    console.log(`ScaleService/resetCurrentSum`);
    this.currentSums = [];
    this.weighChangeEmitter.emit(0);
    this.lastWeigh = 0;
    this.clearPreviousSumFromStorage();
  }

  private getInitialHistory(): Result[] {
    return this.localStorage.retrieve(this.historyResultsStorageKey) || [];
  }

  private initValuesFromStorage() {
    this.currentResults = this.getInitialHistory() || [];
    this.lastWeigh = this.localStorage.retrieve(this.lastWeighStorageKey) || 0;
    this.lastSums = this.localStorage.retrieve(this.lastSumStorageKey) || [];
    this.currentSums = this.localStorage.retrieve(this.lastSumStorageKey) || [];
    console.log(`ScaleService/initValuesFromStorage: got ${this.historyResultsStorageKey} value from storage`, this.currentResults);
    console.log(`ScaleService/initValuesFromStorage: got ${this.lastWeighStorageKey} value from storage`, this.lastWeigh);
    console.log(`ScaleService/initValuesFromStorage: got ${this.lastSumStorageKey} value from storage`, this.lastSums);
  }

  private clearPreviousSumFromStorage() {
    this.localStorage.clear(this.lastWeighStorageKey);
    this.localStorage.clear(this.lastSumStorageKey);
  }
}
