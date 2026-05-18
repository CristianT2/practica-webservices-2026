import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalPeliculas } from './portal-peliculas';

describe('PortalPeliculas', () => {
  let component: PortalPeliculas;
  let fixture: ComponentFixture<PortalPeliculas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalPeliculas],
    }).compileComponents();

    fixture = TestBed.createComponent(PortalPeliculas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
