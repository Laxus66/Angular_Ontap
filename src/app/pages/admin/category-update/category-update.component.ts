import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent {
  categories: ICategory = {
    name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router

  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const CateId = +params['id'];
      this.getCategoryDetails(CateId);
    });
  }
  getCategoryDetails(id: number) {
    this.categoryService.getOnecategory(id).subscribe((data: any) => {
      this.categories = data;
    });
  }

  onHandleSubmit(name: string) {
    this.categoryService.updateCategory(this.categories).subscribe(categories => {
      console.log(categories);
      window.alert(`Bạn đã cập nhật thành công sản phẩm ${name}`)
      this.router.navigate(['/admin/category']);
    })
  }
}
