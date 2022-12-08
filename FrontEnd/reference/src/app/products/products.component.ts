import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productList:any;
product=new Cart();

  constructor(private api:ApiService,private cartService:CartService) { }
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
    }
    addtocart(item:any){
      this.cartService.addtoCart(item);
      console.log('add to card ',item)
          this.product.description= item['description'];
          this.product.category= item['category'];
          this.product.price= item['price'];
          this.product.productId= item['id'];
          this.product.title= item['title'];

      this.createCart();
    }
    createCart(){
      console.log(this.product)
      this.cartService.saveCardDetails(this.product).subscribe(data=>{
        console.log(data);
        
      })
    }}
