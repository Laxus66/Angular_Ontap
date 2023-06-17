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
  isSubmitted = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router

  ) { }
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllcategory().subscribe((data) => {
      this.categories = data;
    });
  }
  onHandleSubmit(name: string) {
    this.isSubmitted = true;
    if (this.isFormValid('name') && this.isFormValid('price') && this.isFormValid('category')) {
      this.productService.addProduct(this.product).subscribe(product => {
        console.log(product);
        window.alert(`Bạn đã thêm thành công sản phẩm ${name}`)
        this.router.navigate(['/admin/product']);
      });
    }
  }

  isFormValid(field: string): boolean {
    if (field === 'name') {
      return this.product.name.trim() !== '';
    } else if (field === 'price') {
      const price = this.product.price;
      return !isNaN(Number(price)) && Number(price) > 0;
    } else if (field === 'category') {
      const cateId = this.product.cate_id;
      return !isNaN(Number(cateId)) && Number(cateId) > 0;
    }
    return false;
  }

}
