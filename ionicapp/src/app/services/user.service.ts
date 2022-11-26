import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }
  
  getUser(data):Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/apiuser/getuser`, data);
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/apiuser/`);
  }

  uploadIMage(data) {
    return this.http.post(`${this.apiUrl}/apiuser/imageupload`, data);
  }

  getImages(data):Observable<Image[]> {
    return this.http.post<Image[]>(`${this.apiUrl}/apiuser/getimages`, data);
  }

  createUser(data) {
    return this.http.post(`${this.apiUrl}/apiuser/insertuser`, data);
  }

}