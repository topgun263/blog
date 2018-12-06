var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
var BlogpostFeaturedComponent = /** @class */ (function () {
    function BlogpostFeaturedComponent(blogpostService) {
        this.blogpostService = blogpostService;
    }
    BlogpostFeaturedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogpostService.getFeaturedBlogs().subscribe(function (data) { return _this.blogs = data; }, function (error) { return _this.error = error; });
    };
    BlogpostFeaturedComponent = __decorate([
        Component({
            selector: 'app-blogpost-featured',
            templateUrl: './blogpost-featured.component.html',
            styleUrls: ['./blogpost-featured.component.css']
        }),
        __metadata("design:paramtypes", [BlogpostService])
    ], BlogpostFeaturedComponent);
    return BlogpostFeaturedComponent;
}());
export { BlogpostFeaturedComponent };
//# sourceMappingURL=blogpost-featured.component.js.map