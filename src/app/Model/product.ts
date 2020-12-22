import { Category } from "./Category";
import { Supplier } from "./supplier";

export class Product {
    ProductId: number;
    ProductName: string
    SupplierId: number
    CategoryId: number
    QuantityPerUnit: number
    UnitPrice: number
    UnitsInStock: number
    UnitsOnOrder: number
    ReorderLevel: number
    Discontinued: boolean
    Category : Category
    Supplier : Supplier
}