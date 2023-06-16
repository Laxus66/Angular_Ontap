import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
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

  removeItem(id: any, name: string) {
    const confirm = window.confirm(`Bạn có muốn xóa sản phẩm ${name}`)
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(P => P.id !== id);
        window.alert(`Xóa thành công sản phẩm ${name}`)
      });
    }
  }
}
