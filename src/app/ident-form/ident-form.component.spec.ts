import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentFormComponent } from './ident-form.component';

describe('IdentFormComponent', () => {
  let component: IdentFormComponent;
  let fixture: ComponentFixture<IdentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
