import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer) { }

  public iframeSrc: SafeResourceUrl;
  public iframeHeight: number;

  public sliderConfig = {
    slidesPerView: 2.7,
  };
  public currentLocations: string[] = ['место раз', 'место два', 'место три', 'место четыре', 'место пять', ];

  ngOnInit() {
    this.iframeHeight = window.innerHeight - 100;
    this.iframeSrc = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73322.32470424451!2d38.96408327008643!3d54.94990100963894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414a0c77154de23d%3A0xb7e7e7bf61b6d1f1!2z0JvRg9GF0L7QstC40YbRiywg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1605729026851!5m2!1sru!2sru');
  }

}
