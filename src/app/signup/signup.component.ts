import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      mobile:['', [Validators.required, Validators.minLength(10)]],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirmpassword:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get name(){
    return this.signupForm.get('name');
  }
  get lastname(){
    return this.signupForm.get('lastname');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get mobile(){
    return this.signupForm.get('mobile');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get confirmpassword(){
    return this.signupForm.get('confirmpassword');
  }


  ///make method to create user
  signUp(){
    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res=>{
      alert("Registration Successfull");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("something wrong")
    })
  }

}
