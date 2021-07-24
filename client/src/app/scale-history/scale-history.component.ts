import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { ScaleService } from '../scale.service';

@Component({
  selector: 'app-scale-history',
  templateUrl: './scale-history.component.html',
  styleUrls: ['./scale-history.component.scss']
})
export class ScaleHistoryComponent implements OnInit {
  public historyList: Result[] = [];

  constructor(private scaleService: ScaleService) {
  }

  ngOnInit(): void {
    this.historyList = this.scaleService.getHistoryList();
  }

}
