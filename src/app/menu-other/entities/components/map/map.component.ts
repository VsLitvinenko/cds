import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {MapInterface} from './entities/interfaces/map.interface';
import {MapService} from './entities/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _domSanitizer: DomSanitizer, private _mapService: MapService ) {
    this.iframeSrc = this._domSanitizer.bypassSecurityTrustResourceUrl('');
  }

  public currentMapItem: MapInterface;
  public iframeSrc: SafeResourceUrl;
  public iframeHeight: number;
  public mapItemsList: MapInterface[];

  ngOnInit() {
    this.iframeHeight = window.innerHeight - 100;
    this._mapService.mapList$.subscribe((data: MapInterface[]) => {
      data = null;
      if (data && data.length) {
        this.mapItemsList = data;
        this.chooseMapItem(data[0]);
      }
    });
    this._mapService.getMapList();
  }

  public chooseMapItem(mapItem: MapInterface) {
    if (mapItem.selected) {
      return;
    }
    this.currentMapItem = mapItem;
    this.iframeSrc = this._domSanitizer.bypassSecurityTrustResourceUrl(mapItem.iframe);
    this.mapItemsList.forEach((item: MapInterface) => {
      item.selected = item.id === mapItem.id;
    });
  }

}
