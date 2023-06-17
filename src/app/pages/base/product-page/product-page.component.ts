import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products: IProduct[] = [];
  categories: ICategory[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    forkJoin([
      this.productService.getAllProduct(),
      this.categoryService.getAllcategory(),
    ]).subscribe(([products, categories]) => {
      this.products = products;
      this.categories = categories;
      console.log(this.products);
    });
  }

  getCategoryName(cate_id: number): string {
    const category = this.categories.find(category => category.id === cate_id);
    return category ? category.name : '';
  }

}
