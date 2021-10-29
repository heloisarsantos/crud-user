import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export enum TYPE {
    ERROR = 'Erro',
    WARN = 'Atenção',
    SUCCESS = 'Sucesso'
};

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private toast: MessageService) { }

    success(message: string) {
        this.toast.add({ severity: 'success', summary: TYPE.SUCCESS, detail: message });
    }

    warn(message: string) {
        this.toast.add({ severity: 'warn', summary: TYPE.WARN, detail: message });
    }

    error(message: string) {
        this.toast.add({ severity: 'error', summary: TYPE.ERROR, detail: message });
    }
}