import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private baseUrl='http://localhost:8080/categoriesName';

  constructor(private http:HttpClient) { }

  getResource():Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);
  }
}
