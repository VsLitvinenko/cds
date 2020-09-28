import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudiosEntryFormPage } from './studios-entry-form.page';

describe('Tab3Page', () => {
  let component: StudiosEntryFormPage;
  let fixture: ComponentFixture<StudiosEntryFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudiosEntryFormPage],
      imports: [IonicModule.forRoot(), ]
    }).compileComponents();

    fixture = TestBed.createComponent(StudiosEntryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
