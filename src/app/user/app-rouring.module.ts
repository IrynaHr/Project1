import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LikedUsersComponent} from '../liked-users/liked-users.component';
import {UserComponent} from './user.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'liked-users', component: LikedUsersComponent },
  { path: 'users', component: UserComponent },
  { path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
export const routingComponents =[
  LikedUsersComponent,
  UserComponent
]
