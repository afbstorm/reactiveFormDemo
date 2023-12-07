import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {emailValidator} from "../shared/validators/email.validator";
import {telValidator} from "../shared/validators/tel.validator";
import {confirmAdressValidator} from "../shared/validators/confirmAdress.validator";

interface IAdresse {
  rue: string;
  num: number;
  ville: string;
  cp: number;
}


@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent {

  nom: string = 'web';
  prenom: string = '';
  email: string = '';
  tel!: number;
  pseudo: string = '';
  adresse!: IAdresse;
  titreFonction: string = '';
  descFonction: string = '';

  formCv: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) {

    this.formCv = this.fb.group(
      {
        nom : ["", [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
        prenom : ["", [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
        email : ['', [emailValidator]],
        tel : ['', [telValidator]],
        pseudo : ["", [Validators.minLength(8), Validators.maxLength(20), Validators.required]],
        adresse: this.fb.group({
          rue: ["", [Validators.minLength(3), Validators.maxLength(30), Validators.required]],
          num: [null, [Validators.maxLength(3), Validators.required]],
          ville: ["", [Validators.minLength(3), Validators.maxLength(30), Validators.required]],
          cp: [null, [Validators.minLength(4), Validators.maxLength(4), Validators.required]]
        }, { validators: confirmAdressValidator }),
        titreFonction : ["", [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
        descFonction : ["", [Validators.minLength(10), Validators.maxLength(250), Validators.required]],
      }
    )
  }

  submitForm() {
    if (this.formCv.valid) {
      console.log(this.formCv.value)
    }
  }
}
