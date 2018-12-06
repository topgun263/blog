import { TestBed } from '@angular/core/testing';
import { BlogpostService } from './blogpost.service';
describe('BlogpostService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BlogpostService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=blogpost.service.spec.js.map