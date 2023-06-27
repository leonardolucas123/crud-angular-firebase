import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { filmeService } from '../filme.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';



@Component({

  selector: 'app-edit-filme',

  templateUrl: './edit-filme.component.html',

  styleUrls: ['./edit-filme.component.css']

})

export class EditfilmeComponent implements OnInit{

  filmeForm: FormGroup;



  constructor(

    private filmeService: filmeService,

    private fb: FormBuilder,

    private location: Location,

    private activeRoute: ActivatedRoute,

    private router: Router,

    private toastr: ToastrService

  ){

    this.filmeForm = this.createForm();

  }



  createForm(){

    return this.fb.group({

      nome: new FormControl('', Validators.required),

      idade: new FormControl('', Validators.required),

      telefone: new FormControl('', [Validators.required,  Validators.pattern('^[0-9]+$')])

    });

  }



  ngOnInit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id != null) {

      this.filmeService.getfilmeById(id).valueChanges().subscribe(data => {

        this.filmeForm.setValue(data as any);

      });

    }

  }



  submitForm(){

    this.filmeService.updatefilme(this.filmeForm.value);

    this.toastr.success(

      this.filmeForm.controls['nome'].value + " atualizado."

    );

    this.router.navigate(['list-filme']);

  }

  goBack(){

    this.location.back();

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



 