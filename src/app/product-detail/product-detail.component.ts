import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;
  commentForm!: FormGroup;
  productId: any; // dynamic product id

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        this.productId = params.get('id');
        this.loadProductDetails(this.productId);
      }
    )

    this.commentForm = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.required]
    })

  }

  loadProductDetails(id: any) {
    this.productService.getProductById(id).subscribe(
      {
        next: (response) => {
          this.product = response.product;
        },
        error: (error) => {
          console.error('Error loading product details', error);
        }
      }
    )
  }

  onComment() {
    if (this.commentForm.valid) {
      this.productService.addComment(this.productId, this.commentForm.value).subscribe(
        {
          next: (response) => {
            console.log('Comment added', response);
            this.commentForm.reset();
            this.loadProductDetails(this.productId);
          },
          error: (error) => {
            console.error('Error adding comment', error);
          }
        }
      )
    }
  }

}
