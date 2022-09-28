import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudStoreComponent } from './crud-store.component';

describe('CrudStoreComponent', () => {
  let component: CrudStoreComponent;
  let fixture: ComponentFixture<CrudStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
