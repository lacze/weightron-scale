import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScaleViewComponent } from './scale-view/scale-view.component';
import { ScaleHistoryComponent } from './scale-history/scale-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaleViewComponent,
    ScaleHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
