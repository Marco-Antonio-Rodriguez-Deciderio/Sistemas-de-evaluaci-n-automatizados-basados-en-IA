import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesTareasComponent } from './calificaciones-tareas.component';

describe('CalificacionesTareasComponent', () => {
  let component: CalificacionesTareasComponent;
  let fixture: ComponentFixture<CalificacionesTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificacionesTareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionesTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
