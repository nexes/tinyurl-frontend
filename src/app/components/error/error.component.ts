import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-error',
    templateUrl: 'error.component.html',
    styleUrls: ['error.component.css']
})
export class ErrorDialogComponent {
    private title: string;
    private message: string;


    constructor(@Inject(MD_DIALOG_DATA) public data: any) {
        this.title = data.title;
        this.message = data.message;
    }
}
