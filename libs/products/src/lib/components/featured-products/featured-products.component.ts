import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'products-featured-products',
    templateUrl: './featured-products.component.html'
})
export class FeaturedProductsComponent implements OnInit {
    featuredProducts: Product[] = [];

    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this.getFeaturedProducts();
    }

    getFeaturedProducts() {
        this.productsService.getFeaturedProducts(4).subscribe((products) => {
            this.featuredProducts = products;
        });
    }
}
