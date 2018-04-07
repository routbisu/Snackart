import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import 'rxjs/add/operator/take';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;
  product: Product = {};
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories$ = this.categoryService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    }
  }

  save(product) {

    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (confirm('Are you sure?')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
  }

}
