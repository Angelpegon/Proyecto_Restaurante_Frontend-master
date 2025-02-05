import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearplatoComponent } from './crearplato.component';

describe('CrearplatoComponent', () => {
  let component: CrearplatoComponent;
  let fixture: ComponentFixture<CrearplatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearplatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearplatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
