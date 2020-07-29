import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjScreenRecoderComponent } from './aj-screen-recoder.component';

describe('AjScreenRecoderComponent', () => {
  let component: AjScreenRecoderComponent;
  let fixture: ComponentFixture<AjScreenRecoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjScreenRecoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjScreenRecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
