import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';


interface Product {
ProductName: string;
price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,BrowserModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evaluation';

  products: Product = {
    ProductName: '',
    price: 0
  };
  onSubmit(products:any){
    // this.products.push({ ...this.product });
    this.products = { ProductName: '', price: 0 };
  }
}
