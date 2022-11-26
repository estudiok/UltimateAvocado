import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image.model';
import { User } from '../models/user.model';
import { PhotosService } from '../services/photos.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  photos: string[] = [];
  images: Image[] | undefined;
  user: User;

  urlBase: string;

  constructor(
    private photo_service: PhotosService,
    private user_service: UserService
  ) {
    
    this.photos = this.photo_service.photos;
    this.urlBase = this.user_service.apiUrl;
    this.user = JSON.parse(localStorage.getItem("user")) as User;

   }
  
  ngOnInit() {

  }

  loadImages() {
    let formData = new FormData();
    formData.append("idUser", this.user.idUser.toString());

    this.user_service.getImages(formData).subscribe(
      (images: Image[]) => {
        this.images = images;
      }
    )

  }

  ionViewWillEnter() {
    this.loadImages();
    
  }

  watchChange(event) {
  }

  changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
      return new Date(
        new Date(date).toLocaleString('en-US', {
          timeZone,
        }),
      );
    }
  
    return new Date(
      date.toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

  
  formatDateNow() {
    let dateNow = this.changeTimeZone(new Date(), 'America/La_Paz');
    let date = dateNow.toLocaleDateString().split('/')
    let auxDate = date[2] + '-' + date[1] + '-' + date[0];
    let hour = dateNow.toLocaleTimeString();
    let concat = auxDate + ' ' + hour;
     return concat;
  }

  async takePhoto() {
    let blobImage = await this.photo_service.addNewPhoto() as Blob;    
    const formData =  new FormData();
    formData.append("image", blobImage, "image.png");
    formData.append("createDate", this.formatDateNow());
    formData.append("idUser", this.user.idUser.toString());

    this.user_service.uploadIMage(formData).subscribe(
      (status) => {
        this.loadImages();
      }
    );
  }
}
