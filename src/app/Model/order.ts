import { OrderDetail } from "./orderDetail"

export class Order {
    OrderId : number 
    OrderDate: Date
    RequiredDate : Date
    ShippedDate : Date 
    ShipVia : number 
    Freight : number 
    ShipName : string 
    ShipAddress : string 
    ShipCity : string 
    Shipregion : string 
    ShipPostalCode : string 
    ShipCountry : string  
    OrderDetail : OrderDetail[]
}