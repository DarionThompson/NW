import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { LoginRepsonse } from '../Model/login.service';

@Injectable()
export class AuthenticationService{
    Url: string;
    Header : any; 
    loginResponse : LoginRepsonse

    constructor(private http : HttpClient){
        this.Url = 'https://localhost:5001/api/Account/login';
        const headerSettings: {[name: string]: string | string[];}= {}
        this.Header = new HttpHeaders(headerSettings);
    }

    Login(model: any): Observable<any>{
        return this.http.post(this.Url,model,{headers: this.Header})
    }
}