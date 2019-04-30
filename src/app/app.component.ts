import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Error Messaging using directive!';

  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'name': new FormGroup({
        'firstname': new FormControl(null, 
          [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
        'mi': new FormControl(null),
        'lastname': new FormControl(null, 
          [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      }),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });

  }

  onSubmit() {
    if (this.userForm.invalid) {
      console.log('Form is invalid!');
    } else {
      console.log('Form submitted!');
      console.log(this.userForm);
    }
  }
}
