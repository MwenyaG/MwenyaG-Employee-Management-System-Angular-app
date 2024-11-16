import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormRoutingModule } from './employee-form-routing.module';
import { EmployeeFormComponent } from './employee-form.component';

// Import Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatLineModule } from '@angular/material/core';

// Import ReactiveFormsModule for form handling
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    EmployeeFormRoutingModule,
    // Add Angular Material modules here
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    // Add ReactiveFormsModule here
    ReactiveFormsModule
  ]
})
export class EmployeeFormModule {}
