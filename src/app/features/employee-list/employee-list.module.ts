import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';

import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select'; 

import { ReactiveFormsModule } from '@angular/forms';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';

@NgModule({
  declarations: [EmployeeListComponent, ConfirmDialogComponent, ActionButtonsComponent],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class EmployeeListModule {}
