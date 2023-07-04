import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InfoModalComponent } from './info-modal/info-modal.component';

import { AppRoutingModule } from './app-routing.module';

import { FilterPipe } from './filter.pipe';
import { LimitToPipe } from './limitTo.pipe';
import { ApiInteractions } from './api-interactions';

@NgModule({
    declarations: [
        AppComponent,
        FilterPipe,
        LimitToPipe,
        InfoModalComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
    ],
    providers: [ApiInteractions],
    bootstrap: [AppComponent]
})
export class AppModule { }
