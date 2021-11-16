import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleManagementRoutingModule } from './title-management-routing.module';
import { TitleCardListComponent } from './title-card-list/title-card-list.component';


@NgModule({
  declarations: [
    TitleCardListComponent
  ],
  imports: [
    CommonModule,
    TitleManagementRoutingModule
  ]
})
export class TitleManagementModule { }
