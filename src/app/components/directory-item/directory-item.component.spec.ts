import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryItemComponent } from './directory-item.component';

describe('DirectoryItemComponent', () => {
  let component: DirectoryItemComponent;
  let fixture: ComponentFixture<DirectoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
