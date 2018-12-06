import { async, TestBed } from '@angular/core/testing';
import { BlogpostFeaturedComponent } from './blogpost-featured.component';
describe('BlogpostFeaturedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BlogpostFeaturedComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BlogpostFeaturedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=blogpost-featured.component.spec.js.map