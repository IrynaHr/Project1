import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-liked-users',
  templateUrl: './liked-users.component.html',
  styleUrls: ['./liked-users.component.scss']
})
export class LikedUsersComponent implements OnInit {

  public isliked;
  constructor(private userservice: UserServiceService) { }

  ngOnInit() {
    this.userservice.getUsers().subscribe(data => {
    this.isliked = data;
    })
  }

}
