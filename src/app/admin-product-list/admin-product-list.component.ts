import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-product-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-product-list.component.html',
  styleUrl: './admin-product-list.component.css'
})
export class AdminProductListComponent {

  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  editProduct(productId: number) {
    this.router.navigate([`/admin/products/edit/${productId}`]);
  }

  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe(() => {
        this.products = this.products.filter(p => p.id !== productId);
      });
    }
  }

}
