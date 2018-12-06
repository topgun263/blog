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
import { BlogService } from '../../services/blog.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
var BlogFormComponent = /** @class */ (function () {
    function BlogFormComponent(fb, blogService, router, route) {
        this.fb = fb;
        this.blogService = blogService;
        this.router = router;
        this.route = route;
    }
    BlogFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.pageTitle = 'Edit Blog';
            this.blogService.getBlog(+id).subscribe(function (res) {
                _this.blogForm.patchValue({
                    title: res.title,
                    description: res.description,
                    is_featured: res.is_featured,
                    is_active: res.is_active,
                    id: res.id
                });
                _this.imagePath = res.image;
            });
        }
        else {
            this.pageTitle = 'Create Blog';
        }
        this.blogForm = this.fb.group({
            id: [''],
            title: ['', Validators.required],
            description: ['', Validators.required],
            is_featured: ['0'],
            is_active: ['1'],
            image: [''],
        });
    };
    BlogFormComponent.prototype.onSelectedFile = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.blogForm.get('image').setValue(file);
        }
    };
    Object.defineProperty(BlogFormComponent.prototype, "title", {
        get: function () { return this.blogForm.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlogFormComponent.prototype, "description", {
        get: function () { return this.blogForm.get('description'); },
        enumerable: true,
        configurable: true
    });
    BlogFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('title', this.blogForm.get('title').value);
        formData.append('description', this.blogForm.get('description').value);
        formData.append('is_featured', this.blogForm.get('is_featured').value);
        formData.append('is_active', this.blogForm.get('is_active').value);
        formData.append('image', this.blogForm.get('image').value);
        var id = this.blogForm.get('id').value;
        if (id) {
            this.blogService.updateBlog(formData, +id).subscribe(function (res) {
                if (res.status === 'error') {
                    _this.uploadError = res.message;
                }
                else {
                    _this.router.navigate(['/admin/blogs']);
                }
            }, function (error) { return _this.error = error; });
        }
        else {
            this.blogService.createBlog(formData).subscribe(function (res) {
                if (res.status === 'error') {
                    _this.uploadError = res.message;
                }
                else {
                    _this.router.navigate(['/admin/blogs']);
                }
            }, function (error) { return _this.error = error; });
        }
    };
    BlogFormComponent = __decorate([
        Component({
            selector: 'app-blog-form',
            templateUrl: './blog-form.component.html',
            styleUrls: ['./blog-form.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            BlogService,
            Router,
            ActivatedRoute])
    ], BlogFormComponent);
    return BlogFormComponent;
}());
export { BlogFormComponent };
//# sourceMappingURL=blog-form.component.js.map