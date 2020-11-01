import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { PhotoInterface } from '../interfaces/photo.interface';

const { Camera } = Plugins;

@Injectable()

export class PhotoService {
  public photos: PhotoInterface[] = [];

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.push(
        {
          filepath: null,
          webviewPath: capturedPhoto.webPath,
        });
  }
}
