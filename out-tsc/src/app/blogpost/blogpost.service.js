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
import { HttpClient, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
var BlogpostService = /** @class */ (function () {
    function BlogpostService(handler) {
        this.ServerUrl = environment.baseUrl;
        this.http = new HttpClient(handler);
    }
    BlogpostService.prototype.getBlogs = function () {
        return this.http.get(this.ServerUrl + 'api/blogs').pipe(catchError(this.handleError));
    };
    BlogpostService.prototype.getFeaturedBlogs = function () {
        return this.http.get(this.ServerUrl + 'api/featured_blogs').pipe(catchError(this.handleError));
    };
    BlogpostService.prototype.getBlog = function (id) {
        return this.http.get(this.ServerUrl + 'api/blog/' + id)
            .pipe(catchError(this.handleError));
    };
    BlogpostService.prototype.getRecentBlogs = function () {
        return this.http.get(this.ServerUrl + 'api/recent_blogs').pipe(catchError(this.handleError));
    };
    BlogpostService.prototype.getCategories = function () {
        return this.http.get(this.ServerUrl + 'api/categories').pipe(catchError(this.handleError));
    };
    BlogpostService.prototype.handleError = function (error) {
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
        this.errorData = {
            errorTitle: 'Oops! Request for document failed',
            errorDesc: 'Something bad happened. Please try again later.'
        };
        return throwError(this.errorData);
    };
    BlogpostService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpBackend])
    ], BlogpostService);
    return BlogpostService;
}());
export { BlogpostService };
//# sourceMappingURL=blogpost.service.js.map