import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      {
        next: (response) => {
          this.products = response.products
        },
        error: (error) => {
          console.error('Error loading products', error)
        }
      }
    )
  }



}
