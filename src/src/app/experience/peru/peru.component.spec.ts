import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeruComponent } from './peru.component';

describe('PeruComponent', () => {
  let component: PeruComponent;
  let fixture: ComponentFixture<PeruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
