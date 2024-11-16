import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form.component';

const routes: Routes = [
  { path: '', component: EmployeeFormComponent },
  { path: ':id', component: EmployeeFormComponent } // For editing
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeFormRoutingModule {}
