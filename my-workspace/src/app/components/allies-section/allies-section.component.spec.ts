import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliesSectionComponent } from './allies-section.component';

describe('AlliesSectionComponent', () => {
  let component: AlliesSectionComponent;
  let fixture: ComponentFixture<AlliesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlliesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlliesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
