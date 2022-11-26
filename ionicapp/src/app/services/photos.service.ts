import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos: string[] = [];

  constructor() { }

  async addNewPhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })

    if (photo) {
      // console.log("photo all: ",photo);
      
      return await fetch(photo.webPath).then(r => r.blob());
      // if (blobo) {
      //   console.log(blobo);
      // }
    }

    return 0;
  }

}
