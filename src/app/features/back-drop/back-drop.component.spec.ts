import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackDropComponent } from './back-drop.component';

describe('BackDropComponent', () => {
  let component: BackDropComponent;
  let fixture: ComponentFixture<BackDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackDropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
