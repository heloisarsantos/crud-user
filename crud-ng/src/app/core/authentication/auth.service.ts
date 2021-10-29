import { ToastService } from './../services/toast.service';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router,
    private toast: ToastService) { }

  authLogin(provider) {
    return this.afAuth.signInWithPopup(provider).then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
    }).catch(() => {
      this.toast.error('Erro inesperado. Tente novamente.');
    });
  }

  getAuth() {
    return this.afAuth;
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
    }).catch((error) => {
      console.log(error.code)
      if (error.code == 'auth/wrong-password') {
        this.toast.warn('Senha incorreta');
      }
      if (error.code == 'auth/user-not-found') {
        this.toast.warn('Usuário não encontrado');
      }
      if (error.code === 'auth/invalid-email') {
        this.toast.warn('E-mail inválido');
      }
    });
  }

  loginWithGoogle() {
    return this.authLogin(new GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['login']);
      });
    }).catch(() => {
      this.toast.error('Erro ao sair do sistema. Tente novamente.');
    });
  }
}