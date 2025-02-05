import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpedidomesasComponent } from './verpedidomesas.component';

describe('VerpedidomesasComponent', () => {
  let component: VerpedidomesasComponent;
  let fixture: ComponentFixture<VerpedidomesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpedidomesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpedidomesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
