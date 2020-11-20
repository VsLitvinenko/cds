import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CdsNavComponent } from './cds-nav.component';

describe('CdsNavComponent', () => {
  let component: CdsNavComponent;
  let fixture: ComponentFixture<CdsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdsNavComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CdsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
