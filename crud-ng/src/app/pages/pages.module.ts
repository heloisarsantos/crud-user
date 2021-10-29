import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './user/list/list.component';
import { DetailComponent } from './user/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MasterComponent } from '../shared/components/master.component';
import { SharedModule } from '../shared/shared.module';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';

import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LoginGuard } from '../core/guards/login.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    {
        path: '',
        component: MasterComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'list' },
            { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
            { path: 'details', component: DetailComponent, canActivate: [AuthGuard] },
            { path: '**', component: PagenotfoundComponent, canActivate: [AuthGuard] }
        ],
    }
];

@NgModule({
    declarations: [
        DetailComponent,
        ListComponent,
        LoginComponent,
        PagenotfoundComponent,
        MasterComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
        ReactiveFormsModule,
        DialogModule,
        ConfirmDialogModule,
        ToastModule,
        TableModule,
        InputTextModule,
        InputMaskModule,
        FormsModule,
        ButtonModule,
        PasswordModule,
        CardModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        DetailComponent,
        ListComponent,
        LoginComponent,
        PagenotfoundComponent,
        MasterComponent,
        RouterModule
    ],
    providers: [MessageService, ConfirmationService]
})
export class PagesModule { }