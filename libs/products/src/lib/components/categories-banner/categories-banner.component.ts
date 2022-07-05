import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'products-categories-banner',
    templateUrl: './categories-banner.component.html'
})
export class CategoriesBannerComponent implements OnInit {
    categories: Category[] = [];

    constructor() {}
    // private categoriesService: CategoriesService

    ngOnInit(): void {
        // this.getCategories();
    }

    // getCategories() {
    //     this.categoriesService.getCategories().subscribe((categories) => {
    //         this.categories = categories;
    //     });
    // }
}
