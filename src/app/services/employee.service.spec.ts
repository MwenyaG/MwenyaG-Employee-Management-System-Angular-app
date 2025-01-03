import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';
import { environment } from '../../environments/environment';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Import HttpClientTestingModule to mock HTTP requests
      providers: [EmployeeService]         // Provide the EmployeeService to be tested
    });
    service = TestBed.inject(EmployeeService);  // Get the service instance
    httpMock = TestBed.inject(HttpTestingController);  // Get the HTTP testing controller
  });

  afterEach(() => {
    httpMock.verify();
  });

  // Test: Delete an employee with a given ID
  it('should delete an employee with ID 14fg', () => {
    const employeeId = '14fg';  // The employee ID to delete

    // Call the deleteEmployee function from the service
    service.deleteEmployee(employeeId).subscribe((response) => {
      expect(response).toBeNull();  
    });

    // Expect a DELETE request to be made to the correct endpoint
    const req = httpMock.expectOne(`${environment.baseUrl}/${employeeId}`);
    
    // Ensure the HTTP method is DELETE
    expect(req.request.method).toBe('DELETE');
    
    req.flush(null);  // Respond with null as expected for a successful DELETE request
  });

  it('should handle error when deleting an employee', () => {
    const employeeId = '14fg';  // The employee ID to delete

    // Call the deleteEmployee function from the service
    service.deleteEmployee(employeeId).subscribe({
      next: (response) => {
        // Handle success (not expected in this test)
        fail('Expected an error, but got a response');
      },
      error: (error) => {
        expect(error.status).toBe(404);  // Expect a 404 Not Found if the employee is not found
      },
    });

    // Expect the DELETE request to be made
    const req = httpMock.expectOne(`${environment.baseUrl}/${employeeId}`);
    
    // Mock the error response (e.g., 404 Not Found if employee does not exist)
    req.flush('Employee not found', { status: 404, statusText: 'Not Found' });
  });
});
