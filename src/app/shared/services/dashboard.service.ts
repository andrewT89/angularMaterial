import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as config from '../../config/config'

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(
        public _router: Router,
        public http: HttpClient) {
    }

    loadUsersQuantity(): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-type", "application/json; charset=UTF-8");
        return this.http.get(config.URL_SERVICES, { headers: headers });
    }
}