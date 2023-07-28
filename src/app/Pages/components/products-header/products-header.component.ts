import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  
  Sort = 'desc';
  itemShowCount = 10;


  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.Sort = newSort;
  }
}
