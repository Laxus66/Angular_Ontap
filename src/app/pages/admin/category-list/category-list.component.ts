import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: ICategory[] = [];

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.categoryService.getAllcategory().subscribe((categories) => {
      this.categories = categories;
    });
  }

  removeItem(id: any, name: string) {
    const confirm = window.confirm(`Bạn có muốn xóa sản phẩm ${name}`)
    if (confirm) {
      this.categoryService.deleteCategory(id).subscribe(() => {
        this.categories = this.categories.filter(C => C.id !== id);
        window.alert(`Xóa thành công danh mục ${name}`)
      });
    }
  }
}
