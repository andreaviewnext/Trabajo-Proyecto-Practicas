import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit {

  /*
  public myForm: FormGroup = new FormGroup ({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  });
  */

  //Esta forma y la anterior hacen exactamente lo mismo, pero esta segunda opcion es una manera mas reducida de no repetir siempre lo mismo
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService) { }

  ngOnInit(): void {

  }

  //para validar los errores 
  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;
      }
    }
    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}
