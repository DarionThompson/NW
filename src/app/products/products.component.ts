import { Component, OnInit } from '@angular/core';
import { nwClientService } from '../Service/nwclient.service';
import { Product } from '../Model/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Products : Product[]
  constructor(private nwService : nwClientService) { 
    this.getproducts()
  }

  getproducts() {
    return this.nwService.getProducts().subscribe(
        data => {
          this.Products = data
        }, error => {
          console.log(error)
        }
    )
  }

}
