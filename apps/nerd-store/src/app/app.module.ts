import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@silent-jayh/ui';
import { ProductsModule } from '@silent-jayh/products';

import { AccordionModule } from 'primeng/accordion';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'products', component: ProductListComponent }
];

@NgModule({
    declarations: [AppComponent, HomePageComponent, ProductListComponent, HeaderComponent, FooterComponent, NavComponent],
    imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), UiModule, ProductsModule, AccordionModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
