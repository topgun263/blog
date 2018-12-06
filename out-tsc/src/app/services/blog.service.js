var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
var BlogService = /** @class */ (function () {
    function BlogService(http) {
        this.http = http;
        this.serverUrl = environment.baseUrl;
    }
    BlogService.prototype.getBlogs = function () {
        return this.http.get(this.serverUrl + 'api/adminBlogs').pipe(catchError(this.handleError));
    };
    BlogService.prototype.getBlog = function (id) {
        return this.http.get(this.serverUrl + 'api/adminBlog/' + id).pipe(catchError(this.handleError));
    };
    BlogService.prototype.createBlog = function (blog) {
        return this.http.post(this.serverUrl + 'api/createBlog', blog)
            .pipe(catchError(this.handleError));
    };
    BlogService.prototype.updateBlog = function (blog, id) {
        return this.http.post(this.serverUrl + 'api/updateBlog/' + id, blog)
            .pipe(catchError(this.handleError));
    };
    BlogService.prototype.deleteBlog = function (id) {
        return this.http.delete(this.serverUrl + 'api/deleteBlog/' + id).pipe(catchError(this.handleError));
    };
    BlogService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened. Please try again later.');
    };
    BlogService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], BlogService);
    return BlogService;
}());
export { BlogService };
//# sourceMappingURL=blog.service.js.map