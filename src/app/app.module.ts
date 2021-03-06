import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatInputModule,
    MatCheckboxModule,
    MdButtonModule,
    MatDatepickerModule,
    MdNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MdIconModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorDialogComponent } from './components/error/error.component';
import { InformationComponent } from './components/information/information.component';

import { ShortenService } from './services/shorten.service';
import { DialogWindowService } from './services/dialog-window.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorDialogComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MdButtonModule,
    MatDatepickerModule,
    MdNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MdIconModule
  ],
  providers: [
    ShortenService,
    DialogWindowService
  ],
  entryComponents: [
    ErrorDialogComponent,
    InformationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
