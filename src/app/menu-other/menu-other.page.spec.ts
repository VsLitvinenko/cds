import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuOtherPage } from './menu-other.page';

describe('Tab2Page', () => {
  let component: MenuOtherPage;
  let fixture: ComponentFixture<MenuOtherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOtherPage],
      imports: [IonicModule.forRoot(), ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuOtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
