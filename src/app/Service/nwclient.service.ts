import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class nwClientService{

    constructor(private http : HttpClient){}

    loginUrl = "api/Account/login"

    options: {
        headers?: HttpHeaders | {[header: string]: string | string[]},
        observe?: 'body' | 'events' | 'response',
        params?: HttpParams|{[param: string]: string | string[]},
        reportProgress?: boolean,
        responseType?: 'arraybuffer'|'blob'|'json'|'text',
        withCredentials?: boolean,
      }

    getProducts(){
        
    }
    
}