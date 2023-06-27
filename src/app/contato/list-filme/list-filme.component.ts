import { Component, OnInit } from '@angular/core';

import { filmeService } from '../filme.service';

import { ToastrService } from 'ngx-toastr';

import { filme } from '../filme';



@Component({

  selector: 'app-list-filme',

  templateUrl: './list-filme.component.html',

  styleUrls: ['./list-filme.component.css'],

})

export class ListfilmeComponent implements OnInit {

  page = 1;

  listafilmes: filme[] = [];

  listaVazia: Boolean = true;

  mostrarLoader: Boolean = true;



  constructor(

    private filmeService: filmeService,

    private toastr: ToastrService

  ) {}



  ngOnInit() {

    let fetchData = this.filmeService.getfilmeList();

    fetchData.snapshotChanges().subscribe((data) => {

      this.listafilmes = [];

      if (data.length <= 0) {

        this.listaVazia = true;

      } else {

        this.listaVazia = false;

        data.forEach((item: any) => {

          let filme = item.payload.toJSON();

          filme['$key'] = item.key;

          this.listafilmes.push(filme as filme);

        });

      }

      this.mostrarLoader = false;

    });

  }



  deletefilme(filme: filme) {

    if (window.confirm('Tem certeza que deseja remover o filme?')) {

      if (filme.$key != null) {

        this.filmeService.deletefilme(filme.$key);

        this.toastr.success(filme.nome + ' removido com sucesso.');

      }

    }

  }

}
