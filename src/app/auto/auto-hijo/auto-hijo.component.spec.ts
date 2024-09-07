import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoHijoComponent } from './auto-hijo.component';

describe('AutoHijoComponent', () => {
  let component: AutoHijoComponent;
  let fixture: ComponentFixture<AutoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
