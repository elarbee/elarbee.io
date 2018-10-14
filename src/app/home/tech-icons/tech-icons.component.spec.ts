import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIconsComponent } from './tech-icons.component';

describe('TechIconsComponent', () => {
  let component: TechIconsComponent;
  let fixture: ComponentFixture<TechIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
