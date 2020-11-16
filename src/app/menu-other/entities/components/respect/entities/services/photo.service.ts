import {Injectable} from '@angular/core';
import {CameraOptions, CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {PhotoInterface} from '../interfaces/photo.interface';

const { Camera } = Plugins;

@Injectable()

export class PhotoService {
  public localPhotos: PhotoInterface[] = [];

  constructor() { }

  private async _addNewToGallery(options: CameraOptions) {
    Camera.getPhoto(options).then((imageData) => {
        const curStr = `data:image/${imageData.format};base64,`;
        this.localPhotos.push( {
            id: null,
            localViewPath: curStr + imageData.base64String,
        });
    });
  }

  public async addLocalImage(fromCamera: boolean) {
      await this._addNewToGallery( {
          resultType: CameraResultType.Base64,
          source: fromCamera ? CameraSource.Camera : CameraSource.Photos,
          quality: 100,
          saveToGallery: false,
      } );
  }
}
