import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 public cartItemList:any=[]
 public productList=new BehaviorSubject<any>([]);
  stringifiedData: any;
  constructor(
    private httpClient:HttpClient
  ) { }
  getproducts()
  {
   return this.productList.asObservable();
  }
 
  setproducts(product:any){
this.cartItemList.push(...product);
this.productList.next(product);
  }
  addtoCart(product:any)
  {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalprice();
    console.log(this.cartItemList);
  }
  getTotalprice():number
  {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any)
  {
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }
saveCardDetails(Product:any){
console.log('Inside cart service',Product);
//this.stringifiedData=JSON.stringify(Product);
// console.log('after parssing data',this.stringifiedData)
// console.log("mapped to cart",crt)
 
const baseUrl="http://localhost:8080/product/addproduct"
alert("working")
return this.httpClient.post<Cart>(`${baseUrl}`,Product);
}

}
 