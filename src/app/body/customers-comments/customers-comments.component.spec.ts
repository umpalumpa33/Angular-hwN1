import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCommentsComponent } from './customers-comments.component';

describe('CustomersCommentsComponent', () => {
  let component: CustomersCommentsComponent;
  let fixture: ComponentFixture<CustomersCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
