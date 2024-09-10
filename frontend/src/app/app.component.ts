import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogueService } from './catalogue.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CatalogueService]
})
export class AppComponent implements OnInit {

  categories: string[] = [];

  constructor(private catalogueService:CatalogueService) { }

  ngOnInit():void {
    this.catalogueService.getResource()
    .subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
  }
}
