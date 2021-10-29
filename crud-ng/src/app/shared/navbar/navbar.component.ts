import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(
        private authService: AuthService) { }

    items: MenuItem[];

    ngOnInit() {
        this.startNavItems();
    }

    private startNavItems() {
        this.items = [
            {
                label: 'Usuários',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Listar',
                        icon: 'pi pi-fw pi-list',
                        routerLink: '/list'
                    },
                    {
                        label: 'Novo',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: '/details'
                    }
                ]
            }
        ];
    }

    logout() {
        this.authService.logout();
    }
}