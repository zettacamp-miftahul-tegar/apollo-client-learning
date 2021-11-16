import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsManagementRoutingModule } from './schools-management-routing.module';
import { SchoolTableComponent } from './school-table/school-table.component';


@NgModule({
  declarations: [
    SchoolTableComponent
  ],
  imports: [
    CommonModule,
    SchoolsManagementRoutingModule
  ]
})
export class SchoolsManagementModule { }
