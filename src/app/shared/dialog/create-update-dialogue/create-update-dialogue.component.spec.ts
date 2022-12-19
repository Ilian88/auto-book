import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDialogueComponent } from './create-update-dialogue.component';

describe('CreateDialogueComponent', () => {
  let component: CreateUpdateDialogueComponent;
  let fixture: ComponentFixture<CreateUpdateDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
