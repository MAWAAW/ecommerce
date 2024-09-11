import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../product';
import { CatalogueService } from '../catalogue.service';
import {RouterOutlet, RouterModule, RouterLink} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, CommonModule, RouterModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [CatalogueService],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  productList: Product[] = [];

  filteredproductlist: Product[] = [];

  catalogueService: CatalogueService = inject(CatalogueService);

  constructor() { 
    console.log("constructeur home component...");
    this.productList = this.catalogueService.getAllProducts();
    this.filteredproductlist = this.productList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredproductlist = this.productList;
      return;
    }
    this.filteredproductlist = this.productList.filter((productList) =>
      productList?.name.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
