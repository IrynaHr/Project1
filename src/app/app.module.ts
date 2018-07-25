import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {UserServiceService} from './user-service.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppRoutingModule, routingComponents} from './user/app-rouring.module'
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    routingComponents,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
