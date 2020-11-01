import {Injectable} from '@angular/core';
import {CameraOptions, CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {PhotoInterface} from '../interfaces/photo.interface';

const { Camera } = Plugins;

@Injectable()

export class PhotoService {
  public photos: PhotoInterface[] = [];

  constructor() { }

  public async addNewToGallery(options: CameraOptions) {
    Camera.getPhoto(options).then((imageData) => {
        const curStr = `data:image/${imageData.format};base64,`;
        this.photos.push( {webviewPath: curStr + imageData.base64String} );
    });
  }

  public async fromCamera() {
      await this.addNewToGallery( {
          resultType: CameraResultType.Base64,
          source: CameraSource.Camera,
          quality: 100,
          saveToGallery: false,
      } );
  }

  public async fromGallery() {
      await this.addNewToGallery({
          resultType: CameraResultType.Base64,
          source: CameraSource.Photos,
          quality: 100,
          saveToGallery: false,
      });
  }
}
