import { TestBed, inject } from '@angular/core/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseService]
    });
  });

  it('should ...', inject([CourseService], (service: CourseService) => {
    expect(service).toBeTruthy();
  }));

    it('should have getCourses method', inject([CourseService], (service: CourseService) => {
    expect(service.getCourses).toBeTruthy();
  }));

    it('should have getCourses method return 2 courses', inject([CourseService], (service: CourseService) => {
    expect(service.getCourses().length).toBe(2);
  }));

});
