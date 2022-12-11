import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit{
contactForm!: FormGroup;
ngOnInit(): void {
  this.contactForm = this.initForm();
  // this.onPathValue();
  // this.onSetValue();
}
constructor(private readonly fb: FormBuilder) { }

  onPathValue():void{
    this.contactForm.patchValue({name:'mario'});
  }
  onSetValue():void{
    this.contactForm.setValue({comment:'Hola'});
  }

  onSubmit(): void{
    console.log(this.contactForm.value)
  }

  initForm(): FormGroup{ //declara las propiedades que tendra nuestra formulario
  return this.fb.group({
  name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
  check:[false, [Validators.required]],
  select:['', [Validators.required]],
  comment:['', [Validators.required, Validators.maxLength(22)]]

    })
  }
}

