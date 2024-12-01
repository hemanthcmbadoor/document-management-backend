import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  standalone: false
})
export class SignUpComponent implements OnInit {
  private signUpForm!: FormGroup;
  private readonly fb!: FormBuilder;

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(10)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, ]]
      }
    );
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    return group.get('password')!.value === group.get('confirmPassword')!.value
      ? null
      : { mismatch: true };
  }
}
