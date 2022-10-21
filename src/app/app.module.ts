import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { ButtonComponent } from './button/button.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,

  ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
