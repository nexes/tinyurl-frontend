import { Component } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    private originalURL: string;

    constructor() {
        this.originalURL = '';
    }

    submitLink() {
        console.log('submit link', this.originalURL);
        this.originalURL = '';
    }
}
