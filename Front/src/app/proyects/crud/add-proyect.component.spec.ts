import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProyectComponent } from './add-proyect.component';

describe('AgregarProyectoComponent', () => {
  let component: AddProyectComponent;
  let fixture: ComponentFixture<AddProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
