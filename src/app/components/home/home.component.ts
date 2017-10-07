import { Component } from '@angular/core';
import { ShortenService, ShortUrl } from '../../services/shorten.service';


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

    constructor(private shortener: ShortenService) {
        this.originalURL = '';
        this.shortenURL = '';
        this.expire = false;
        this.showNewUrl = false;
        this.expirationDate = undefined;
    }

    submitLink() {
        this.shortener.create(this.originalURL, this.expirationDate).subscribe(
            (resp: ShortUrl) => {
                console.log(resp);

                if (resp.status === 200) {
                    this.shortenURL = resp.url;
                    this.showNewUrl = true;
                }
            },
            (err) => {
                console.log('creation error ', err);
            }
        );

        this.originalURL = '';
        this.expire = false;
    }
}
