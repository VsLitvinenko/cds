import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CdsInfoPage } from './cds-info.page';

describe('Tab1Page', () => {
  let component: CdsInfoPage;
  let fixture: ComponentFixture<CdsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdsInfoPage],
      imports: [IonicModule.forRoot(), ]
    }).compileComponents();

    fixture = TestBed.createComponent(CdsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
