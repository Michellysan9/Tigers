import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiolibroComponent } from './audiolibro.component';

describe('AudiolibroComponent', () => {
  let component: AudiolibroComponent;
  let fixture: ComponentFixture<AudiolibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudiolibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiolibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
