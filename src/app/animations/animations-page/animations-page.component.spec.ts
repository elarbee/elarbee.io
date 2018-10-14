import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsPageComponent } from './animations-page.component';

describe('AnimationsPageComponent', () => {
  let component: AnimationsPageComponent;
  let fixture: ComponentFixture<AnimationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
