# Employee Management App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

# Lessons learnt 
- Organize app into feature modules (e.g., employee-form, employee-list).
- Use routing and lazy loading for better performance.
- Use services for crud functionality
- Use services for communication between components.
- Extract reusable components for code reusability.
- Write tests for components*


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/64e824f3-c394-4f5a-9b88-602349b477fb/db0a6233-36bf-4775-8e07-92fa19a49c28/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/64e824f3-c394-4f5a-9b88-602349b477fb/8a21926e-27da-419c-b816-056220dda4d2/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/64e824f3-c394-4f5a-9b88-602349b477fb/b8e023fd-3bc5-43d9-bc7c-a182db8c56cf/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/64e824f3-c394-4f5a-9b88-602349b477fb/5de92c33-da4b-4ab6-8899-d5033a93417b/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/64e824f3-c394-4f5a-9b88-602349b477fb/a0db472c-fdb9-49b7-8680-7fdfe1ff2f58/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/64e824f3-c394-4f5a-9b88-602349b477fb/87407cd0-518a-4993-a3c7-327609e99efc/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/64e824f3-c394-4f5a-9b88-602349b477fb/a9d8a9d1-01d4-40ff-9581-a52c995eeb4a/image.png)


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
