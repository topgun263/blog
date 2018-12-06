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
import { Router, ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { Title } from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';
var BlogpostDetailComponent = /** @class */ (function () {
    function BlogpostDetailComponent(route, router, blogpostService, titleService) {
        this.route = route;
        this.router = router;
        this.blogpostService = blogpostService;
        this.titleService = titleService;
    }
    BlogpostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blog$ = this.route.paramMap.pipe(switchMap(function (params) {
            return _this.blogpostService.getBlog(+params.get('id'));
        }));
        this.titleService.setTitle('Blog Detail');
    };
    BlogpostDetailComponent = __decorate([
        Component({
            selector: 'app-blogpost-detail',
            templateUrl: './blogpost-detail.component.html',
            styleUrls: ['./blogpost-detail.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            BlogpostService,
            Title])
    ], BlogpostDetailComponent);
    return BlogpostDetailComponent;
}());
export { BlogpostDetailComponent };
//# sourceMappingURL=blogpost-detail.component.js.map