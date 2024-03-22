import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [ { name: 'Laptop', price: 1200, available: true }, { name: 'Smartphone', price: 800, available: true }, { name: 'Headphones', price: 100, available: false }, { name: 'Camera', price: 600, available: true }, { name: 'Tablet', price: 300, available: false }, { name: 'Fitness Tracker', price: 50, available: true }, { name: 'Bluetooth Speaker', price: 80, available: true }, { name: 'Gaming Console', price: 400, available: false }, { name: 'Smartwatch', price: 150, available: true }, { name: 'External Hard Drive', price: 120, available: true }, ];
}
