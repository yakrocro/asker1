import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreQuestionnaireComponent } from './parametre-questionnaire.component';

describe('ParametreQuestionnaireComponent', () => {
  let component: ParametreQuestionnaireComponent;
  let fixture: ComponentFixture<ParametreQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
