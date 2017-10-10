import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';



@Component({
    selector: 'app-info',
    templateUrl: 'information.component.html',
    styleUrls: ['information.component.css']
})
export class InformationComponent {
    private title: string;
    private originalUrl: string;
    private expiration: Date;
    private usageCount: number;


    constructor(@Inject(MD_DIALOG_DATA) public data: any) {
        this.title = data.title;
        this.originalUrl = data.url;
        this.expiration = data.expiration.toDateString();
        this.usageCount = data.count;
    }
}
