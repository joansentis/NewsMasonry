import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { APP_CONFIG } from '../config/app.config';

@Injectable()
export class AppService {
    private newsListUrl: string;
    private newsByIdUrl: string;
    constructor(private http: Http) {
        this.newsListUrl = APP_CONFIG.baseApiUrl + 'news';
    }

    getNews(): Observable<any> {
        return new Observable<any>((observer: any) => {
            this.http.get(this.newsListUrl).subscribe(data => {
                observer.next(data.json());
            }, error => {
                observer.error(error);
            });
        });
    }

    postNews(obj): Observable<any> {
        return new Observable<any>((observer: any) => {
            this.http.post(this.newsListUrl, obj).subscribe(data => {
                observer.next(data.json());
            }, error => {
                observer.error(error);
            });
        });
    }

    getNewsById(id: string): Observable<any> {
        this.newsByIdUrl = APP_CONFIG.baseApiUrl + 'news/' + id;
        return new Observable<any>((observer: any) => {
            this.http.get(this.newsByIdUrl).subscribe(data => {
                observer.next(data.json());
            }, error => {
                observer.error(error);
            });
        });
    }

    getNewsJSON(): Observable<any> {
        return new Observable<any>((observer: any) => {
            this.http.get('/src/app/news.json').subscribe(data => {
                observer.next(data.json());
            }, error => {
                observer.error(error);
            });
        });
    }
}
