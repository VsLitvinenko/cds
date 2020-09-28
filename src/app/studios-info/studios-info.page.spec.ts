import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudiosInfoPage } from './studios-info.page';

describe('Tab2Page', () => {
  let component: StudiosInfoPage;
  let fixture: ComponentFixture<StudiosInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudiosInfoPage],
      imports: [IonicModule.forRoot(), ]
    }).compileComponents();

    fixture = TestBed.createComponent(StudiosInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
