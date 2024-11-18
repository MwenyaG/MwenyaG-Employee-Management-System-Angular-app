import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'position', 'doj', 'salary', 'phone', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private empService: EmployeeService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openEditForm(employee: any): void {
    this.router.navigate(['/employee-form', employee.id.toString()]);
  }

  // Navigate to Employee Form page for Add/Edit operation
  navigateToForm(data?: any) {
    this.router.navigate(['/employee-form'], {
      state: { employee: data } // Passing the entire employee data, including ID
    });
  }

  getEmployeeList() {
    this.empService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('Error loading employee list.', 'Close', { duration: 3000 });
      },
    });
  }

  // Filter employee list based on search input
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  // Open confirmation dialog before deleting an employee
  deleteEmployee(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this employee?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // If user confirmed deletion
        this.empService.deleteEmployee(id.toString()).subscribe({
          next: () => {
            this.getEmployeeList();
            this.snackBar.open('Employee deleted successfully!', 'Close', { duration: 3000 });
          },
          error: (err) => {
            console.error(err);
            this.snackBar.open('Error deleting employee.', 'Close', { duration: 3000 });
          }
        });
      } else {
        this.snackBar.open('Deletion cancelled.', 'Close', { duration: 3000 });
      }
    });
  }
}
