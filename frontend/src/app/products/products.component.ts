import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Product } from '../product';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() product!: Product;

  constructor() { 
    console.log("constructeur product component...");
  }
}
