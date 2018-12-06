import { async, TestBed } from '@angular/core/testing';
import { BlogpostRecentComponent } from './blogpost-recent.component';
describe('BlogpostRecentComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BlogpostRecentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BlogpostRecentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=blogpost-recent.component.spec.js.map