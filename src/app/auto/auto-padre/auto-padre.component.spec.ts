import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPadreComponent } from './auto-padre.component';

describe('AutoPadreComponent', () => {
  let component: AutoPadreComponent;
  let fixture: ComponentFixture<AutoPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
