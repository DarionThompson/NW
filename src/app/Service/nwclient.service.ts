import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthenticationService } from './authentication.service'
import { Product } from '../Model/product'

@Injectable()
export class nwClientService{

    Url :string
    Header = HttpHeaders

    constructor(private http : HttpClient, private authService : AuthenticationService){
      this.Url = 'https://localhost:5001/api/Product';
  }

  getProducts(): Observable<any>{
    let header = new HttpHeaders({'Authorization': `Bearer ${this.authService.GetAuthToken()}`})
      return this.http.get<Product[]>(this.Url, {headers:header})
  }
}