import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent {
  product: any = ''
  categories: ICategory[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,

  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.getProductDetails(productId);
    });
    this.getCategories();
  }
  getProductDetails(id: number) {
    this.productService.getOneProduct(id).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });
  }

  getCategoryName(cate_id: number): string {
    const category = this.categories.find(category => category.id === cate_id);
    return category ? category.name : '';
  }

  getCategories() {
    this.categoryService.getAllcategory().subscribe((data) => {
      this.categories = data;
    });
  }

}
