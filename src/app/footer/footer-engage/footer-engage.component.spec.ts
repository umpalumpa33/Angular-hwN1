import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEngageComponent } from './footer-engage.component';

describe('FooterEngageComponent', () => {
  let component: FooterEngageComponent;
  let fixture: ComponentFixture<FooterEngageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEngageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEngageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
