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
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(router, cmspageService) {
        this.router = router;
        this.cmspageService = cmspageService;
        this.model = new Contact();
        this.submitted = false;
        this.error = {};
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        return this.cmspageService.contactForm(this.model).subscribe(function (data) { return _this.model = data; }, function (error) { return _this.error = error; });
    };
    ContactFormComponent.prototype.gotoHome = function () {
        this.router.navigate(['/']);
    };
    ContactFormComponent = __decorate([
        Component({
            selector: 'app-contact-form',
            templateUrl: './contact-form.component.html',
            styleUrls: ['./contact-form.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            CmspageService])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
export { ContactFormComponent };
//# sourceMappingURL=contact-form.component.js.map