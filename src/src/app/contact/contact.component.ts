import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public form: FormGroup;
  public send: boolean = false;

  constructor(private fb: FormBuilder) {}

   ngOnInit() {
    console.log(this.send)
    
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required])],
      lname: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      message: [null, Validators.compose([Validators.required])],
    });
  }

  processForm(){
    this.send = true;
    setTimeout(() => {  
      this.send = false;
      }, 2000); 
  }
}

