import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-product-form.component.html',
  styleUrl: './admin-product-form.component.css'
})
export class AdminProductFormComponent {
  productForm: FormGroup;
  isEditMode: boolean = false;
  productId: any

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.isEditMode = true;
        this.productService.getProductById(this.productId).subscribe(product => {
          this.productForm.patchValue(product);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      if (this.isEditMode) {
        this.productService.updateProduct(this.productId!, this.productForm.value).subscribe(() => {
          this.router.navigate(['/admin/products']);
        });
      } else {
        this.productService.addProduct(this.productForm.value).subscribe(() => {
          this.router.navigate(['/admin/products']);
        });
      }
    }
  }
}
