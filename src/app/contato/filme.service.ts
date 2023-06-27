import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { filme } from './filme';
@Injectable({
  providedIn: 'root'
})
export class filmeService {
  listafilmesRef: AngularFireList<filme>;
  filmeRef: AngularFireObject<filme>;
  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase

    this.listafilmesRef = this.db.list('list-filmes');

    this.filmeRef = this.db.object('list-filmes/' + 0);

  }


  // Inserir filme

  insertfilme(filme: filme) {

    this.listafilmesRef.push({

      nome: filme.nome,

      telefone: filme.telefone,

      idade: filme.idade,

    });

  }



  // Buscar um único Objeto filme pelo seu ID

  getfilmeById(id: string): AngularFireObject<filme> {

    this.filmeRef = this.db.object('list-filmes/' + id);

    return this.filmeRef;

  }



  // Fetch Students List

  getfilmeList(): AngularFireList<filme> {

    return this.listafilmesRef;

  }



  // Update Student Object

  updatefilme(filme: filme) {

    this.filmeRef.update({

      nome: filme.nome,

      telefone: filme.telefone,

      idade: filme.idade,

    });

  }



  // Delete Student Object

  deletefilme(id: string) {

    this.filmeRef = this.db.object('list-filmes/' + id);

    this.filmeRef.remove();

  }

}
