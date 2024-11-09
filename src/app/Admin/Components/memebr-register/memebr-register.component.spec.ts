import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberRegisterComponent } from './memebr-register.component';

describe('MemebrRegisterComponent', () => {
  let component: MemberRegisterComponent;
  let fixture: ComponentFixture<MemberRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
