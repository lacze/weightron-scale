import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScaleViewComponent } from './scale-view/scale-view.component';
import { ScaleHistoryComponent } from './scale-history/scale-history.component';
import { WeighButtonComponent } from './scale-view/scale-view-buttons/weigh-button/weigh-button.component';
import { ResetButtonComponent } from './scale-view/scale-view-buttons/reset-button/reset-button.component';
import { CurrentWeightComponent } from './scale-view/current-weight/current-weight.component';
import { SumWeightComponent } from './scale-view/sum-weight/sum-weight.component';
import { ScaleViewButtonsComponent } from './scale-view/scale-view-buttons/scale-view-buttons.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    ScaleViewComponent,
    ScaleHistoryComponent,
    WeighButtonComponent,
    ResetButtonComponent,
    CurrentWeightComponent,
    SumWeightComponent,
    ScaleViewButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
