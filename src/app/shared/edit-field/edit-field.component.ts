import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.scss']
})
export class EditFieldComponent implements OnInit {
  @Input()
  fieldValue: string;

  @Input()
  username: string;

  @Output()
  showFieldEmitter: EventEmitter<boolean> = new EventEmitter();

  @Output()
  fieldValueEmitter: EventEmitter<string> = new EventEmitter<string>();

  showField: boolean = false;

  constructor() {}

  ngOnInit() {}

  editClicked() {
    this.showField = true;
    this.showFieldEmitter.emit();
  }

  saveFieldValue() {
    this.showField = false;
    this.fieldValueEmitter.emit(this.fieldValue);
  }
}
