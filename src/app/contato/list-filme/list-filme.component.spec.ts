import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfilmeComponent } from './list-filme.component';

describe('ListfilmeComponent', () => {
  let component: ListfilmeComponent;
  let fixture: ComponentFixture<ListfilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListfilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
