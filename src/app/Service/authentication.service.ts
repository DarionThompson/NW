import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable, from} from 'rxjs'
import { LoginRepsonse } from '../Model/login.service';
import 'rxjs/add/operator/map';
//import {mergeMap} from 'rxjs/add/operator/mergeMap';

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
       var result = from(this.http.post<LoginRepsonse>(this.Url,model,{headers: this.Header}))
       debugger
       return result.map(response => localStorage.setItem("authToken",response.accessToken))
    }

    GetAuthToken(){
        return localStorage.getItem("authToken");
    }
}