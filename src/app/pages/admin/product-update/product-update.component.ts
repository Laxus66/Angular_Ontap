import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  product: any = ''
  categories: ICategory[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router

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

  // getCategoryName(categoryId: number): string {
  //   const category = this.categories.find((c) => c.id === categoryId);
  //   return category ? category.name : '';
  // }

  getCategories() {
    this.categoryService.getAllcategory().subscribe((data) => {
      this.categories = data;
    });
  }
  onHandleSubmit(name: string) {
    this.productService.updateProduct(this.product).subscribe(product => {
      console.log(product);
      window.alert(`Bạn đã cập nhật thành công sản phẩm ${name}`)
      this.router.navigate(['/admin/product']);
    })
  }
}
