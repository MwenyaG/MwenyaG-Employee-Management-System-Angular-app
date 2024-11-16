import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  empForm: FormGroup;
  employeeData: any;
  isEditMode: boolean = false;
  employeeId: string | null = null;

  position: string[] = [
    'Accountant',
    'Admin Assistant',
    'Customer Support',
    'Finance Manager',
    'HR Assistant',
    'Junior Engineer',
    'Marketing Specialist',
    'Project Coordinator',
    'Sales',
    'Software Developer',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.empForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          this.onlyLettersValidator, // Add the custom validator
        ],
      ],      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      doj: ['', Validators.required],
      salary: [
        '',
        [Validators.required, Validators.min(0), this.positiveNumberValidator],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{11}$/)]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.employeeId = id;
        this.loadEmployeeData(id);
      } else {
        this.isEditMode = false;
      }
    });
  }

  loadEmployeeData(id: string): void {
    this.empService.getEmployeeList().subscribe({
      next: (employees) => {
        this.employeeData = employees.find((e: any) => e.id === id);
        if (this.employeeData) {
          this.empForm.patchValue(this.employeeData);
        } else {
          this.snackBar.open('Employee not found!', 'Close', { duration: 3000 });
          this.router.navigate(['/employee-list']);
        }
      },
      error: (err) => {
        console.error('Error loading employee:', err);
        this.snackBar.open('Error fetching employee details.', 'Close', { duration: 3000 });
        this.router.navigate(['/employee-list']);
      },
    });
  }

  onSubmit(): void {
    if (this.empForm.invalid) {
      this.empForm.markAllAsTouched();
      return;
    }

    if (this.isEditMode && this.employeeId !== null) {
      this.empService.updateEmployee(this.employeeId, this.empForm.value).subscribe({
        next: () => {
          this.snackBar.open('Employee details updated!', 'Close', { duration: 3000 });
          this.router.navigate(['/employee-list']);
        },
        error: (err) => {
          console.error('Error updating employee:', err);
          this.snackBar.open('Error updating employee.', 'Close', { duration: 3000 });
        },
      });
    } else {
      this.empService.addEmployee(this.empForm.value).subscribe({
        next: () => {
          this.snackBar.open('Employee added successfully!', 'Close', { duration: 3000 });
          this.router.navigate(['/employee-list']);
        },
        error: (err) => {
          console.error('Error adding employee:', err);
          this.snackBar.open('Error adding employee.', 'Close', { duration: 3000 });
        },
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/employee-list']);
  }

  formatSalary(): void {
    const salaryControl = this.empForm.get('salary');
    if (salaryControl?.value) {
      let salary = parseFloat(salaryControl.value);
      if (!isNaN(salary)) {
        salaryControl.setValue(salary.toFixed(2));
      }
    }
  }

  positiveNumberValidator(control: any): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && isNaN(value)) {
      return { notANumber: true };
    }
    if (value && parseFloat(value) < 0) {
      return { notPositive: true };
    }
    return null;
  }

  onlyLettersValidator(control: any): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && !/^[a-zA-Z\s]+$/.test(value)) { // Regular expression for letters and spaces
      return { onlyLetters: true };
    }
    return null;
  }

  validateNumberInput(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight'];
    const char = event.key;

    if (!allowedKeys.includes(char) && !/^\d*\.?\d*$/.test(char)) {
      event.preventDefault();
    }
    
  }
}
