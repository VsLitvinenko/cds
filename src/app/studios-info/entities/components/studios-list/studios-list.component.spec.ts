import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudiosListComponent } from './studios-list.component';

describe('StudiosListComponent', () => {
  let component: StudiosListComponent;
  let fixture: ComponentFixture<StudiosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiosListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
