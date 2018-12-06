var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';
var BlogpostModule = /** @class */ (function () {
    function BlogpostModule() {
    }
    BlogpostModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                BlogpostRoutingModule
            ],
            exports: [
                BlogpostFeaturedComponent
            ],
            declarations: [BlogpostFeaturedComponent, BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, CategoriesComponent]
        })
    ], BlogpostModule);
    return BlogpostModule;
}());
export { BlogpostModule };
//# sourceMappingURL=blogpost.module.js.map