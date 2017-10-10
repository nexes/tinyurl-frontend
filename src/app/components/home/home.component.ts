import { Component } from '@angular/core';
import { ShortenService, ShortUrl } from '../../services/shorten.service';
import { DialogWindowService } from '../../services/dialog-window.service';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    private shortenURL: string;
    private originalURL: string;
    private expire: boolean;
    private showNewUrl: boolean;
    private expirationDate: Date;
    private minExpiration: Date;


    constructor(private shortener: ShortenService, private dialog: DialogWindowService) {
        this.originalURL = '';
        this.shortenURL = '';
        this.expire = false;
        this.showNewUrl = false;
        this.expirationDate = undefined;
    }

    submitLink() {
        if (this.originalURL.length === 0) {
            return;
        }

        this.shortener.create(this.originalURL, this.expirationDate).subscribe(
            (resp: ShortUrl) => {
                if (resp.message === 'success') {
                    this.shortenURL = resp.url;
                    this.expirationDate = new Date(resp.expiration);
                    this.showNewUrl = true;
                } else {
                    this.showNewUrl = false;
                    this.dialog.openErrorDialog('Error', resp.message);
                }
            },
            (err) => {
                console.log('creation error ', err);
                this.showNewUrl = false;
                this.dialog.openErrorDialog('Error', err.message);
            }
        );

        this.originalURL = '';
        this.expire = false;
    }
}
