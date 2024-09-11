import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor() { 
    console.log("constructeur catalogue service...");
  }

  productList: Product[] = [
    {
      id: 0,
      name: 'product name',
      description: 'description',
      currentPrice: 333.25,
      promotion: false,
      selected: false,
      available: true,
      photoName: 'assets/logo.png',
      quantity: 6
    },
    {
      id: 1,
      name: 'nonono',
      description: 'description',
      currentPrice: 524.99,
      promotion: true,
      selected: false,
      available: true,
      photoName: 'assets/logo.png',
      quantity: 1
    },
    {
      id: 2,
      name: 'testfiltrage',
      description: 'description',
      currentPrice: 55.98,
      promotion: true,
      selected: false,
      available: true,
      photoName: 'assets/logo.png',
      quantity: 9
    },
  ];

  getAllProducts(): Product[] {
    return this.productList;
  }

  getProductById(id: number): Product | undefined {
    return this.productList.find((product) => product.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
