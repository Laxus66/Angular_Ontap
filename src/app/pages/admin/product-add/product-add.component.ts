import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product: IProduct = {
    name: '',
    price: 0,
    cate_id: 0
  }
  categories: ICategory[] = [];

  constructor(
    // private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router

  ) { }
  ngOnInit() {
    this.getCategories();
  }
  getProductDetails(id: number) {
    this.productService.getOneProduct(id).subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
    });
  }

  getCategories() {
    this.categoryService.getAllcategory().subscribe((data) => {
      this.categories = data;
    });
  }
  onHandleSubmit(name: string) {
    this.productService.addProduct(this.product).subscribe(product => {
      console.log(product);
      window.alert(`Bạn đã thêm thành công sản phẩm ${name}`)
      this.router.navigate(['/admin/product']);
    })
  }
}
