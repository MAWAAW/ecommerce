import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {HomeComponent} from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {RouterModule, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, HomeComponent, ProductsComponent, CommonModule, RouterModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []
})
export class AppComponent {

  categories: string[] = [];

  constructor() { 
    console.log("constructeur app component...");
  }
}
