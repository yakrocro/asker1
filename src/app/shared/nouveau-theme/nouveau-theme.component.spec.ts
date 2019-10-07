import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauThemeComponent } from './nouveau-theme.component';

describe('NouveauThemeComponent', () => {
  let component: NouveauThemeComponent;
  let fixture: ComponentFixture<NouveauThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
