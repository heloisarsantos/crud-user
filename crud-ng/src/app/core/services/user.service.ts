import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = environment.BASE_URL;

  constructor(private httpCliente: HttpClient) { }

  getUsers() {
    return this.httpCliente.get(this.BASE_URL);
  }

  getUserById(userId: number) {
    return this.httpCliente.get(`${this.BASE_URL}/${userId}`);
  }

  createUser(user: User) {
    return this.httpCliente.post(this.BASE_URL, user);
  }

  updateUser(user: User) {
    return this.httpCliente.put(this.BASE_URL, user);
  }

  deleteUser(userId: number) {
    return this.httpCliente.delete(`${this.BASE_URL}/${userId}`);
  }
}
