import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // Default route to introduction page
      { path: '', component: IntroductionComponent },
      //to lazy load to employee list
      {
        path: 'employee-list',
        loadChildren: () => import('./features/employee-list/employee-list.module').then(m => m.EmployeeListModule)
      },
      //to lazy load to employee form
      {
        path: 'employee-form',
        loadChildren: () => import('./features/employee-form/employee-form.module').then(m => m.EmployeeFormModule)
      },
      { path: 'introduction', component: IntroductionComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
