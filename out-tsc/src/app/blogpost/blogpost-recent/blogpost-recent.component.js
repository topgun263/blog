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
var BlogpostRecentComponent = /** @class */ (function () {
    function BlogpostRecentComponent(blogpostService) {
        this.blogpostService = blogpostService;
    }
    BlogpostRecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogpostService.getRecentBlogs().subscribe(function (data) { return _this.blogs = data; }, function (error) { return _this.error = error; });
    };
    BlogpostRecentComponent = __decorate([
        Component({
            selector: 'app-blogpost-recent',
            templateUrl: './blogpost-recent.component.html',
            styleUrls: ['./blogpost-recent.component.css']
        }),
        __metadata("design:paramtypes", [BlogpostService])
    ], BlogpostRecentComponent);
    return BlogpostRecentComponent;
}());
export { BlogpostRecentComponent };
//# sourceMappingURL=blogpost-recent.component.js.map