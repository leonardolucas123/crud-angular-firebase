import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfilmeComponent } from './edit-filme.component';

describe('EditfilmeComponent', () => {
  let component: EditfilmeComponent;
  let fixture: ComponentFixture<EditfilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
