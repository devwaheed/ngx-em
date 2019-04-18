import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAemComponent } from './ngx-aem.component';

describe('NgxAemComponent', () => {
  let component: NgxAemComponent;
  let fixture: ComponentFixture<NgxAemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
