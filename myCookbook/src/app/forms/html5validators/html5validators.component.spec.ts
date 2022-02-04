import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5validatorsComponent } from './html5validators.component';

describe('Html5validatorsComponent', () => {
  let component: Html5validatorsComponent;
  let fixture: ComponentFixture<Html5validatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html5validatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5validatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
