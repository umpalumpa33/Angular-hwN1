import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureImgComponent } from './feature-img.component';

describe('FeatureImgComponent', () => {
  let component: FeatureImgComponent;
  let fixture: ComponentFixture<FeatureImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
