import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {IUser, IUserRandom} from './Interfaces/UserInterface';

@Injectable()
export class UserServiceService {
  constructor(private http: HttpClient) {
  }

  private _url = 'http://localhost:3000/';


  getUsers(): Observable<IUser[]> {

    return this.http.get<IUser[]>(this._url);
  }

  getRandomUser(): Observable<IUserRandom> {
    return this.http.get<IUserRandom>('https://randomuser.me/api');
  }

  createUser(req): Observable<any> {
    return this.http.post<any>(this._url + 'add', req);
  }
  likeUser(req): Observable<any>{
    return this.http.put<any>(this._url +'liked', req)
  }
  // deleteUser(req): Observable<any> {
  //   // this.getUsers();
  //   return this.http.delete(this._url + 'delete/' + req.id);
  // }

  activeUser(req): Observable<any> {
    console.log(req);
    return this.http.put<any>(this._url + 'active', req);
  }

  editUser(req): Observable<any> {
    console.log(req);
    return this.http.put<any>(this._url + 'update/' + req.id, req);
  }

}


