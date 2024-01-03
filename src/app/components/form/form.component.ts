import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {formType} from "../../types/formType";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent {
  @Input({ alias: 'form', required: true }) form!: formType;
  @Output() dataEvent = new EventEmitter<string>();

  // form
  public formGroup!: FormGroup;

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.generateForm();
  }

  private generateForm(): FormGroup {
    const formGroup: FormGroup = this._formBuilder.group({});
    try {
      this.form.formInputs.forEach(input => {
        if (input.type !== 'submit')
          formGroup.addControl(input.name, this._formBuilder.control('', Validators.required));
      });
    } catch (e) {
      console.log(e);
    }
    return formGroup;
  }

  public submitForm() {
    this.dataEvent.emit(this.formGroup.value);
  }
}
