import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpedidodomicilioComponent } from './verpedidodomicilio.component';

describe('VerpedidodomicilioComponent', () => {
  let component: VerpedidodomicilioComponent;
  let fixture: ComponentFixture<VerpedidodomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpedidodomicilioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpedidodomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
