import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    const username = this.myForm.get('username').value;
    const password = this.myForm.get('password').value;
    
    // do something with the username and password values
  }
}

//   myForm!: FormGroup;
//   constructor(private formBuilder: FormBuilder) { }
//   ngOnInit(): void {
//     this.myForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required] });




// }
// }