import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContFormComponent } from './cont-form.component';

describe('ContFormComponent', () => {
  let component: ContFormComponent;
  let fixture: ComponentFixture<ContFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
