import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  @ViewChild('taskForm') MyTaskForm: NgForm;
  defaultQuestion = 'pet';
  subscriptionType: string = 'pet';
  answer: string ='';
  genders: string [] = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = true;
  submittedTask: boolean = false;
  passwordTaskSelected: string = '';
  emailTaskSelected: string = '';
  subscriptionTaskSelected: string = '';
  
  suggestUserName() {
    const suggestedName = 'Superuser';

     //Para SOBRESCRIBIR TODO el FORMULARIO
    // this.signupForm.setValue({
    //     userData: {
    //         username: suggestedName,
    //         email: ''
    //     },
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'female' });
    this.signupForm.form.patchValue({
        userData: {
            username: suggestedName
        }
    })
  }
//PARA SOBREESCRIBIR solo lo que dicto.
//   onSubmit(form: NgForm) {
//     console.log(form);
//   }

submitForm() {
  console.log(this.signupForm);
  this.submitted = !this.submitted;
  this.user.username = this.signupForm.value.userData.username;
  this.user.email = this.signupForm.value.userData.email;
  this.user.secretQuestion = this.signupForm.value.secret;
  this.user.answer = this.signupForm.value.questionAnswer;
  this.user.gender = this.signupForm.value.gender;

  this.signupForm.reset();
}
submitTaskForm() {
  console.log(this.MyTaskForm.value.emailTask);
  console.log(this.MyTaskForm.value.password);
  console.log(this.MyTaskForm.value.subscription);
  this.passwordTaskSelected = this.MyTaskForm.value.password;
  this.subscriptionTaskSelected = this.MyTaskForm.value.subscription;
  this.emailTaskSelected = this.MyTaskForm.value.emailTask;
  this.submittedTask = true;
  this.MyTaskForm.reset();
}
}