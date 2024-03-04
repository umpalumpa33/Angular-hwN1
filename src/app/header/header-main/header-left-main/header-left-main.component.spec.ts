import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLeftMainComponent } from './header-left-main.component';

describe('HeaderLeftMainComponent', () => {
  let component: HeaderLeftMainComponent;
  let fixture: ComponentFixture<HeaderLeftMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLeftMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLeftMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
