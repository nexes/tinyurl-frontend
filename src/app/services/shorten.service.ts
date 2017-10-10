import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';


export interface ShortUrl {
    url: string;
    status: number;
    message: string;
    original?: string;
    count?: number;
    expiration?: string;
}


@Injectable()
export class ShortenService {
    private baseURL: string;


    constructor(private http: HttpClient) {
        this.baseURL = `${environment.host}/api/shorten/`;
    }

    create(longUrl: string, expireDate?: Date): Observable<ShortUrl> {
        if (expireDate) {
            return this.http.post<ShortUrl>(`${this.baseURL}create/`, {
                'url': longUrl,
                'expiration': {
                    'year': expireDate.getUTCFullYear(),
                    'month': expireDate.getUTCMonth() + 1,
                    'day': expireDate.getUTCDate()
                }
            });
        }

        return this.http.post<ShortUrl>(`${this.baseURL}create/`, {
            'url': longUrl
        });
    }

    expiration(urlHash: string): Observable<ShortUrl> {
        return this.http.get<ShortUrl>(`${this.baseURL}expiration/${urlHash}/`);
    }

    usageCount(urlHash: string): Observable<ShortUrl> {
        return this.http.get<ShortUrl>(`${this.baseURL}usage/${urlHash}/`);
    }

    originalUrl(urlHash: string): Observable<ShortUrl> {
        return this.http.get<ShortUrl>(`${this.baseURL}original/${urlHash}/`);
    }
}
