import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'products-categories-banner',
    templateUrl: './categories-banner.component.html',
    styles: []
})
export class CategoriesBannerComponent implements OnInit {
    categories: Category[] = [];

    constructor() {}

    ngOnInit(): void {}
}
