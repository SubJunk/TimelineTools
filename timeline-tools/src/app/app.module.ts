import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { LimitToPipe } from './limitTo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    LimitToPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
