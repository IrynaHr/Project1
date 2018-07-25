import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {IUser} from '../interfaces/UserInterface';
import {UserServiceService} from '../user-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  public addRanUserDb;
  public name;
  public surname;
  public mail;
  public users;
  modalRef: BsModalRef;
  public nameEdit;
  public surnameEdit;
  public mailEdit;
  user: IUser;
  public usersearch;
  public randomUser;

  constructor(private modalService: BsModalService, private  _userservice: UserServiceService, private router: Router) {
  }

  ngOnInit() {
    this._userservice.getRandomUser().subscribe((data) => {
      this.randomUser = data;
    });
    this.showUser();
  }

  showUser() {
    this._userservice.getUsers()
      .subscribe((data) => {
        this.users = data;
      });
  }

  addUser(item1, item2, item3) {
    if (!item1 || !item2 || !item3) {
      alert('Error');
    } else {
      const tempUser: any = {};
      tempUser.name = item1;
      tempUser.surname = item2;
      tempUser.mail = item3;
      this.user = tempUser;
      const req = this.user;
      this.users.push(this.user);
      this.name = '';
      this.surname = '';
      this.mail = '';
      this._userservice.createUser(req).subscribe(() => this.showUser());

    }
  }

  // Delete(user) {
  //   this.users.splice(this.users.indexOf(user), 1);
  //   this.users = this.users.filter(each => this.users.length);
  //   this._userservice.deleteUser(user).subscribe(() => this.showUser());
  // }

  ChangeActive(user) {
    this.users.splice(this.users.indexOf(user), 1);
    this.users = this.users.filter(each => this.users.length);
    this._userservice.activeUser(user).subscribe(() => this.showUser());
  }

  likeUser(user){
    console.log("bla");
    this._userservice.likeUser(user).subscribe(()=>this.showUser());
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template);
  }

  editFun(user, template) {

    this.openModal(template);
    this.nameEdit = user.name;
    this.surnameEdit = user.surname;
    this.mailEdit = user.mail;
    this.user = user;
  }

  saveEdit() {
    this.user.name = this.nameEdit;
    this.user.surname = this.surnameEdit;
    this.user.mail = this.mailEdit;
    console.log(this.user);
    this.users.splice(this.users.indexOf(this.user), 1, this.user);
    this._userservice.editUser(this.user).subscribe(res => {
    });
    this.modalRef.hide();
  }


  parseName() {
    this.user = {
      name: this.randomUser.results[0].name.first,
      surname: this.randomUser.results[0].name.last, mail: this.randomUser.results[0].email
    };
  }

  randUserDB(user) {
    this._userservice.createUser(user).subscribe(() => this.showUser());
  }

  addRandomUser() {
    this.parseName();
    this.randUserDB(this.user);
    this.showUser();
  }
  listLikedUsers(){
    this.router.navigate(['/', 'liked-users']);

  }
}

