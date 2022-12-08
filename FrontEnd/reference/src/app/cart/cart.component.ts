import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public product:any=[]
public grandTotal !:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getproducts()
    .subscribe(res=>{
      this.product = res;
    //  this.createCart();
     let cart=new Cart();
      console.log(this.product)
      this.grandTotal=this.cartService.getTotalprice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
  
}
