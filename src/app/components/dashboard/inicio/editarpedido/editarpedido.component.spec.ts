import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpedidoComponent } from './editarpedido.component';

describe('EditarpedidoComponent', () => {
  let component: EditarpedidoComponent;
  let fixture: ComponentFixture<EditarpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarpedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
