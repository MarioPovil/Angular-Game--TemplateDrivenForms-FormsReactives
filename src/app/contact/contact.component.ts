import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm
  {
    "name":string,
    "check": boolean,
    "select": string,
    "comment": string
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  model={
    name:"",
    check:false,
    select:"",
    comment:""
  }
  onSubmit(form: NgForm):void{
    console.log(form)
   }
}
