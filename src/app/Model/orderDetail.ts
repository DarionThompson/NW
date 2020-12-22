import { Order } from "./order"
import { Product } from "./product"

export class OrderDetail {
    OrderId : number 
    ProductId : number 
    UnitPrice : number
    Quanity : number 
    Discount : number
    Order : Order
    Product : Product
}