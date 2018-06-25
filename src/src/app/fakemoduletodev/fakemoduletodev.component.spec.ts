import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakemoduletodevComponent } from './fakemoduletodev.component';

describe('FakemoduletodevComponent', () => {
  let component: FakemoduletodevComponent;
  let fixture: ComponentFixture<FakemoduletodevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakemoduletodevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakemoduletodevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
