import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserService } from 'src/app/Service/new-user.service';
import { Iuser } from 'src/app/modulees/iuser';

function passwordMatcher(
  pass: AbstractControl
): { [key: string]: boolean } | null {
  const passwordControl = pass.get('password');
  const confirmControl = pass.get('confirmPassword');

  if (passwordControl?.pristine || confirmControl?.pristine) {
    return null;
  }

  if (passwordControl?.value === confirmControl?.value) {
    return null;
  }
  return { match: true };
}
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  user: Iuser = {} as Iuser;

  passwordMessage: string = '';
  private validationMessage = {
    required: 'Please enter your password',
    email: 'Please enter valid password',
  };

  constructor(private fb: FormBuilder,private userSer: NewUserService, private router: Router) {


    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],

         passwordGroup: this.fb.group(
        {
          password: ['', [Validators.required,Validators.minLength(6)]],
          confirmPassword: ['', Validators.required ],
        },
        { validator: passwordMatcher }
      ),
      address: this.fb.array([]),
      phone: this.fb.array([]),
    });
  }

  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  setMessage(pass: AbstractControl): void {
    this.passwordMessage = '';
    if ((pass.touched || pass.dirty) && pass.errors) {
      this.passwordMessage = this.validationMessage.required;
      console.log(this.passwordMessage);
    }
  }

  get address(): FormArray {
    return this.userForm.get('address') as FormArray;
  }


  newAddress(): FormGroup {
    return this.fb.group({
      city: '',
      street: '',
    });
  }
  addAddress() {
    this.address.push(this.newAddress());
  }

  removeAddress(num: number) {
    this.address.removeAt(num);
    console.log(num);
  }

  get Phone(): FormArray {
    return this.userForm.get('phone') as FormArray;
  }
  newPhone(): FormGroup {
    return this.fb.group({
      phone: '',
    });
  }
  addPhone() {
    this.Phone.push(this.newPhone());
  }
  removePhone(num: number) {
    this.Phone.removeAt(num);
    console.log(num);
  }

  addUser() {


    this.userSer.signUpUser(this.user).subscribe({
      next: (user1) => {
        this.router.navigate(['/main']);
        console.log(user1);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
