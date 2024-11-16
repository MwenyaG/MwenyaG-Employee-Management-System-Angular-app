# EmployeeManagementApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

# Project Structure

src/ ├── app-routing.module.ts ├── app.component.css ├── app.component.html ├── app.component.spec.ts ├── app.component.ts ├── app.module.ts

├── components/ │ ├── introduction/ │ │ ├── introduction.component.css │ │ ├── introduction.component.html │ │ ├── introduction.component.spec.ts │ │ ├── introduction.component.ts │ │ │ └── main-layout/ │ ├── main-layout.component.css │ ├── main-layout.component.html │ ├── main-layout.component.spec.ts │ ├── main-layout.component.ts

├── features/ │ ├── employee-form/ │ │ ├── employee-form-routing.module.ts │ │ ├── employee-form.component.css │ │ ├── employee-form.component.html │ │ ├── employee-form.component.spec.ts │ │ ├── employee-form.component.ts │ │ ├── employee-form.module.ts │ │ │ └── employee-list/ │ ├── employee-list-routing.module.ts │ ├── employee-list.component.css │ ├── employee-list.component.html │ ├── employee-list.component.spec.ts │ ├── employee-list.component.ts │ ├── employee-list.module.ts │ │ │ ├── action-buttons/ │ │ ├── action-buttons.component.css │ │ ├── action-buttons.component.html │ │ ├── action-buttons.component.spec.ts │ │ ├── action-buttons.component.ts │ │ │ └── confirm-dialog/ │ ├── confirm-dialog.component.css │ ├── confirm-dialog.component.html │ ├── confirm-dialog.component.spec.ts │ ├── confirm-dialog.component.ts

└── services/ ├── employee.service.spec.ts ├── employee.service.ts
