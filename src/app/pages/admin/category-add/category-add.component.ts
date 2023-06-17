import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  categories: ICategory = {
    name: ''
  };
  isSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  onHandleSubmit(name: string) {
    this.isSubmitted = true;
    if (this.isFormValid()) {
      this.categoryService.addCategory(this.categories).subscribe(categories => {
        console.log(categories);
        window.alert(`Bạn đã thêm thành công danh mục ${name}`)
        this.router.navigate(['/admin/category']);
      });
    }
  }

  isFormValid(): boolean {
    return this.categories.name.trim() !== '';
  }
}

