import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearclientesComponent } from './crearclientes.component';

describe('CrearclientesComponent', () => {
  let component: CrearclientesComponent;
  let fixture: ComponentFixture<CrearclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
