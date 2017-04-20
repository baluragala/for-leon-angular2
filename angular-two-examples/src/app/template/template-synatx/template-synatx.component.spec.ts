import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSynatxComponent } from './template-synatx.component';

describe('TemplateSynatxComponent', () => {
  let component: TemplateSynatxComponent;
  let fixture: ComponentFixture<TemplateSynatxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSynatxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSynatxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
