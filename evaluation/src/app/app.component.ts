import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';


interface Product {
ProductName: string;
price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evaluation';
  products: Product = {
    ProductName: '',
    price: 0
  };
  constructor(private http:HttpClient){}

  ngOnInit(){
    this.fetchProducts();
  }
  onSubmit(productAdd:any){
    this.http.post('https://evaluation-10295-default-rtdb.firebaseio.com/products.json',productAdd)
    .subscribe((response:any)=>{
      console.log(response)
    })
      
  }
  fetchProducts(){
    this.http.get('https://evaluation-10295-default-rtdb.firebaseio.com/products.json').subscribe((res: any) => {
      if (res) {
        const products = Object.keys(res).map(key => ({
          _id: key,
          ...res[key] 
        }));
        console.log(products);
      } else {
        console.log('No products found.');
      }
    }, error => {
      console.error('Error fetching products:', error);
    });
}
}
