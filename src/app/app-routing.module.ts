import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { LoadMoreComponent } from './load-more/load-more.component';

const routes: Routes = [
  {path: '', component:LoadMoreComponent},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
