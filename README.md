# Employee Management App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

# Lessons learnt 
- Organize app into feature modules (e.g., employee-form, employee-list).
- Use routing and lazy loading for better performance.
- Use services for crud functionality
- Use services for communication between components.
- Extract reusable components for code reusability.
- Write tests for components*

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/12170740-d675-4742-9126-1f6e471125e4" alt="Image 1" style="width: 48%; margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/451dcb3a-ee2f-40b6-a2bb-b12d03e68936" alt="Image 2" style="width: 48%; margin-bottom: 20px;">
</div>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/62a4f016-70d1-4774-804e-c29312450794" alt="Image 3" style="width: 48%; margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/25e96070-95e8-44d9-b4ea-392d13d1feed" alt="Image 4" style="width: 48%; margin-bottom: 20px;">
</div>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/1f924f34-668d-4422-a78c-137094e66ab9" alt="Image 5" style="width: 48%; margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/09e9f51c-cbe6-48e8-b514-e69981073b77" alt="Image 6" style="width: 48%; margin-bottom: 20px;">
</div>



# Project Structure
```html
src/
├── app-routing.module.ts
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
├── app.module.ts

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

└── services/
    ├── employee.service.spec.ts
    ├── employee.service.ts
