import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InfoModalComponent } from './info-modal/info-modal.component';

import { AppRoutingModule } from './app-routing.module';

import { FilterPipe } from './filter.pipe';
import { LimitToPipe } from './limitTo.pipe';
import { ApiInteractions } from './api-interactions';

@NgModule({ declarations: [
        AppComponent,
        FilterPipe,
        LimitToPipe,
        InfoModalComponent,
    ],
    bootstrap: [AppComponent], imports: [AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule], providers: [ApiInteractions, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
