import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('table') table: Table;

  user: User;
  users: User[];

  userDialog: boolean;
  submitted: boolean;

  constructor(
    private userService: UserService,
    private toast: ToastService,
    private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((result: []) => {
      this.users = result;
    });
  }

  editUser(user: User) {
    this.user = { ...user };
    this.userDialog = true;
  }

  updateUser(user: User) {
    this.submitted = true;
    this.userService.updateUser(user).subscribe(() => {
      this.toast.success('Usuário atualizado com sucesso!');
      this.getUsers();
      this.userDialog = false;
    }, (() => {
      this.toast.error('Não foi possível atualizar esse usuário. Verifique se preencheu todos os campos, e tente novamente!');
    }));
  }

  deleteUser(userId: number) {
    this.confirmationService.confirm({
      message: 'Deseja excluir esse usuário?',
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Sim',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.userService.deleteUser(userId).subscribe(() => {
          this.toast.success('Usuário excluído com sucesso!');
          this.getUsers();
        });
      }
    });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }
}