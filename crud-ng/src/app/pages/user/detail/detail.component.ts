import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  form: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toast: ToastService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    });
  }

  saveUser(user: User) {
    this.userService.createUser(user).subscribe(() => {
      this.toast.success('Usuário cadastrado com sucesso!');
      this.form.reset();
    }, () => this.toast.error('Não foi possivél cadastrar o usuário. Tente novamente'))
  }
}