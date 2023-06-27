import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

import { filmeService } from '../filme.service';



import { ToastrService } from 'ngx-toastr';



@Component({

  selector: 'app-add-filme',

  templateUrl: './add-filme.component.html',

  styleUrls: ['./add-filme.component.css']

})

export class AddfilmeComponent implements OnInit{

  filmeForm: FormGroup;



  constructor(

    private filmeService: filmeService,

    private fb: FormBuilder,

    private toastr: ToastrService){

      this.filmeForm = this.createForm();

    }



    ngOnInit(){

      this.filmeService.getfilmeList();

    }



    createForm(){

      return this.fb.group({

        nome: new FormControl('', Validators.required),

        idade: new FormControl('', Validators.required),

        telefone: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

      });

    }



    resetForm(){

      this.filmeForm.reset();

    }



    submitForm(){

      this.filmeService.insertfilme(this.filmeForm.value);

      this.toastr.success(

        this.filmeForm.controls['nome'].value + " adicionado"

      );

    }



    get nome(){

      return this.filmeForm.get('nome');

    }



    get idade(){

      return this.filmeForm.get('idade');

    }



    get telefone(){

      return this.filmeForm.get('telefone');

    }

}
