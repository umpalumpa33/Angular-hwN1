import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHrefsComponent } from './a-hrefs.component';

describe('AHrefsComponent', () => {
  let component: AHrefsComponent;
  let fixture: ComponentFixture<AHrefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AHrefsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AHrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
