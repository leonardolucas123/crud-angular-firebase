import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.modules';


import {environment} from '../environment';



import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';



import { AddfilmeComponent } from './contato/add-filme/add-filme.component';

import { EditfilmeComponent } from './contato/edit-filme/edit-filme.component';

import { ListfilmeComponent } from './contato/list-filme/list-filme.component';

import { ToastrModule } from 'ngx-toastr';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({

  declarations: [

    AppComponent,

    AddfilmeComponent,

    EditfilmeComponent,

    ListfilmeComponent

  ],

  imports: [

    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireDatabaseModule,

    AppRoutingModule,

    FormsModule,

    ReactiveFormsModule,

    BrowserAnimationsModule, // required animations module

    ToastrModule.forRoot(), // ToastrModule added

    NgxPaginationModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }

