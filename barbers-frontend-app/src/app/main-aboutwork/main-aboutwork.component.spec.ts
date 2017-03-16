/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainAboutworkComponent } from './main-aboutwork.component';

describe('MainAboutworkComponent', () => {
  let component: MainAboutworkComponent;
  let fixture: ComponentFixture<MainAboutworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAboutworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAboutworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
