import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddfilmeComponent } from './contato/add-filme/add-filme.component';

import { ListfilmeComponent } from './contato/list-filme/list-filme.component';

import { EditfilmeComponent } from './contato/edit-filme/edit-filme.component';



const routes: Routes = [

  { path: '', redirectTo: '/list-filme', pathMatch: 'full' },

  { path: 'add-filme', component: AddfilmeComponent },

  { path: 'list-filme', component: ListfilmeComponent },

  { path: 'edit-filme/:id', component: EditfilmeComponent }

];

@NgModule({

  imports: [CommonModule,RouterModule.forRoot(routes)],

  exports: [RouterModule],

  declarations: []

})

export class AppRoutingModule { }
