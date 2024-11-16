// action-buttons.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent {
  @Input() employee: any;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  // edit and delete actions
  onEdit() {
    this.edit.emit(this.employee);
  }

  onDelete() {
    this.delete.emit(this.employee.id);
  }
}
