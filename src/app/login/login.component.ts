import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup
  constructor(private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      email: ['mourad@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.formLogin.value);
  }
}
