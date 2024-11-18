# Employee Management App
# EmployeeManagementApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

run: 'npm install' to get started
## Development server

# Lessons learnt 
- Organize app into feature modules (e.g., employee-form, employee-list).
- Use routing and lazy loading for better performance.
- Use services for crud functionality
- Use services for communication between components.
- Extract reusable components for code reusability.
- Write tests for components*
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Project Structure
<div>
  <pre>
    <code>
src/
├── app-routing.module.ts
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
├── app.module.ts
## Code scaffolding

├── components/
│   ├── introduction/
│   │   ├── introduction.component.css
│   │   ├── introduction.component.html
│   │   ├── introduction.component.spec.ts
│   │   ├── introduction.component.ts
│   │
│   └── main-layout/
│       ├── main-layout.component.css
│       ├── main-layout.component.html
│       ├── main-layout.component.spec.ts
│       ├── main-layout.component.ts
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

├── features/
│   ├── employee-form/
│   │   ├── employee-form-routing.module.ts
│   │   ├── employee-form.component.css
│   │   ├── employee-form.component.html
│   │   ├── employee-form.component.spec.ts
│   │   ├── employee-form.component.ts
│   │   ├── employee-form.module.ts
│   │
│   └── employee-list/
│       ├── employee-list-routing.module.ts
│       ├── employee-list.component.css
│       ├── employee-list.component.html
│       ├── employee-list.component.spec.ts
│       ├── employee-list.component.ts
│       ├── employee-list.module.ts
│       │
│       ├── action-buttons/
│       │   ├── action-buttons.component.css
│       │   ├── action-buttons.component.html
│       │   ├── action-buttons.component.spec.ts
│       │   ├── action-buttons.component.ts
│       │
│       └── confirm-dialog/
│           ├── confirm-dialog.component.css
│           ├── confirm-dialog.component.html
│           ├── confirm-dialog.component.spec.ts
│           ├── confirm-dialog.component.ts
## Build

└── services/
    ├── employee.service.spec.ts
    ├── employee.service.ts
    </code>
  </pre>
</div>
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

# Screenshots
## Introduction page
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

![image](https://github.com/user-attachments/assets/12170740-d675-4742-9126-1f6e471125e4)
## Running end-to-end tests

## Employee list page
![image](https://github.com/user-attachments/assets/451dcb3a-ee2f-40b6-a2bb-b12d03e68936)
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Add employee page
![image](https://github.com/user-attachments/assets/62a4f016-70d1-4774-804e-c29312450794)
## Further help

## Edit employee page
![image](https://github.com/user-attachments/assets/25e96070-95e8-44d9-b4ea-392d13d1feed)

## Confirm delete dialog
![image](https://github.com/user-attachments/assets/1f924f34-668d-4422-a78c-137094e66ab9)

## Employee deleted snackbar
![image](https://github.com/user-attachments/assets/09e9f51c-cbe6-48e8-b514-e69981073b77)
