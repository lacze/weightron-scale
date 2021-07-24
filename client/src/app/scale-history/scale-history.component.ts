import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale-history',
  templateUrl: './scale-history.component.html',
  styleUrls: ['./scale-history.component.scss']
})
export class ScaleHistoryComponent implements OnInit {
  private placeholderHistoryListData = [
    { timestamp: '2021-07-24 (placeholder)', weigh: 10 },
    { timestamp: '2021-07-24 (placeholder)', weigh: 20 },
    { timestamp: '2021-07-24 (placeholder)', weigh: 30 }]
  
    // TODO: create model for type
    public historyList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // TODO: Remove when removing placeholder data
    this.historyList = this.placeholderHistoryListData;
  }

}
