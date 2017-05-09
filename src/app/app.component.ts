import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

class User {
  email: string;
  password: string;
  subscription: string;

  constructor(props) {
    this.email = props['email'] || '';
    this.password = props['password'] || '';
    this.subscription = props['subscription'] || '';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') subscriptionForm: NgForm;

  user: User;

  formSubscriptionOptions = ['basic', 'advanced', 'pro'];

  browserHacked = null;

  onSubmit() {
    if(this.subscriptionForm.valid) {
      this.user = new User(this.subscriptionForm.value)
    } else {
      this.browserHacked = 'Your browser did something unexpected, the form was not valid';
      setTimeout(() => {
        this.onReset();

      }, 2000)
    }
    console.log(this.subscriptionForm.value)
  }

  onReset() {
    this.subscriptionForm.form.reset();
    this.subscriptionForm.form.patchValue({
      email: '',
      password: '',
      confirmPassword: '',
      subscription: 'advanced'
    })
    this.user = null;
    this.browserHacked = null;
  }

}
