import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';

// Import Angular Material Modules
import { MatTableModule } from '@angular/material/table'; // For tables
import { MatPaginatorModule } from '@angular/material/paginator'; // For pagination
import { MatSortModule } from '@angular/material/sort'; // For sorting
import { MatFormFieldModule } from '@angular/material/form-field'; // For input field styling
import { MatInputModule } from '@angular/material/input'; // For input fields
import { MatIconModule } from '@angular/material/icon'; // For icons (edit, delete)
import { MatButtonModule } from '@angular/material/button'; // For buttons
import { MatCardModule } from '@angular/material/card'; // For cards
import { MatSelectModule } from '@angular/material/select'; // For select dropdowns (if needed)

// Import ReactiveFormsModule for handling form-related logic (filter input)
import { ReactiveFormsModule } from '@angular/forms';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';

@NgModule({
  declarations: [EmployeeListComponent, ConfirmDialogComponent, ActionButtonsComponent],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    // Add necessary Angular Material modules here
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    // Add ReactiveFormsModule here for the filter input
    ReactiveFormsModule
  ]
})
export class EmployeeListModule {}
