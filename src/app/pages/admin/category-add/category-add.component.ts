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
    this.categoryService.addCategory(this.categories).subscribe(categories => {
      console.log(categories);
      window.alert(`Bạn đã thêm thành công sản phẩm ${name}`)
      this.router.navigate(['/admin/category']);
    })
  }
}
