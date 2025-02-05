import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmeseroComponent } from './crearmesero.component';

describe('CrearmeseroComponent', () => {
  let component: CrearmeseroComponent;
  let fixture: ComponentFixture<CrearmeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearmeseroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearmeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
