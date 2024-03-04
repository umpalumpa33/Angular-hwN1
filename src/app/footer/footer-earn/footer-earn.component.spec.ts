import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEarnComponent } from './footer-earn.component';

describe('FooterEarnComponent', () => {
  let component: FooterEarnComponent;
  let fixture: ComponentFixture<FooterEarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEarnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
