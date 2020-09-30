import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespectComponent } from './respect.component';

describe('RespectComponent', () => {
  let component: RespectComponent;
  let fixture: ComponentFixture<RespectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespectComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
