import {Injectable} from '@angular/core';
import {CameraOptions, CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {BehaviorSubject, Observable} from 'rxjs';

const { Camera } = Plugins;

@Injectable()

export class PhotoService {
    // tslint:disable:variable-name
    private _localPhotos: string[] = [];
    private _localPhotos$$: BehaviorSubject<string[]> = new BehaviorSubject(null);
    public localPhotos$: Observable<string[]> = this._localPhotos$$ as Observable<string[]>;

  constructor() { }

  private async _addNewToGallery(options: CameraOptions) {
    Camera.getPhoto(options).then((imageData) => {
        const curStr = `data:image/${imageData.format};base64,`;
        this._localPhotos.push(curStr + imageData.base64String);
        this._localPhotos$$.next(this._localPhotos);
    });
  }

  public async addLocalImage(fromCamera: boolean) {
      await this._addNewToGallery( {
          resultType: CameraResultType.Base64,
          source: fromCamera ? CameraSource.Camera : CameraSource.Photos,
          quality: 70,
          saveToGallery: fromCamera,
      } );
  }

  public clearLocalPhotos(): void {
      this._localPhotos = [];
      this._localPhotos$$.next(null);
  }

  public deleteCurrentLocalPhoto(currentSrc: string): void {
      const i = this._localPhotos.indexOf(currentSrc);
      if (i !== -1) {
          this._localPhotos.splice(i, 1);
          this._localPhotos$$.next(this._localPhotos);
      }
  }
}
