import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardSmallComponent } from './project-card-small.component';

describe('ProjectCardSmallComponent', () => {
  let component: ProjectCardSmallComponent;
  let fixture: ComponentFixture<ProjectCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
