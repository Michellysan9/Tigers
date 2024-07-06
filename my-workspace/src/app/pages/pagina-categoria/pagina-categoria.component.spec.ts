import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCategoriaComponent } from './pagina-categoria.component';

describe('PaginaCategoriaComponent', () => {
  let component: PaginaCategoriaComponent;
  let fixture: ComponentFixture<PaginaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
