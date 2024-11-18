import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jasmine.createSpy('close') // Mock MatDialogRef with a spy
          }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            title: 'Confirmation',
            message: 'Are you sure you want to delete this employee?'
          } 
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title and message', () => {
    expect(component.data.title).toBe('Confirmation');
    expect(component.data.message).toBe('Are you sure you want to delete this employee?');
  });

  it('should close the dialog with false on cancel', () => {
    const dialogRefSpy = TestBed.inject(MatDialogRef);
    component.onCancel();
    expect(dialogRefSpy.close).toHaveBeenCalledWith(false);
  });

  it('should close the dialog with true on confirm', () => {
    const dialogRefSpy = TestBed.inject(MatDialogRef);
    component.onConfirm();
    expect(dialogRefSpy.close).toHaveBeenCalledWith(true);
  });
});
