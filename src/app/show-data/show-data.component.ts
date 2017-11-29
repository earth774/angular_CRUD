import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HeroService } from '../hero.service';
import { Account } from '../data-model';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  heroes :Account[];
  heroForm :FormGroup;
  s:number;
  editForm:FormGroup;
  data:any;
  constructor(private fb:FormBuilder,private heroService:HeroService) { 
  	
  	this.createForm();	
  	this.list();
  	this.heroForm = this.fb.group({
      branch_name: ['', Validators.required ],
      balance: ['', Validators.required ]
    });
  	this.editForm = this.fb.group({
  	  account_number:'',
      branch_name1: '',
      balance1: ''
    });
  }
  list(){
    this.heroService.getUser().subscribe(hero=>this.heroes=hero);
  }
	createForm() {

    this.s=0;
  }
  edit(account_number,branch_name,balance){
  	this.editForm = this.fb.group({
  	  account_number:account_number,
      branch_name1: branch_name,
      balance1: balance
    });
    
  }
  onSubmit(){
  	this.heroService.addUser(this.heroForm.value);
  	//console.log(this.heroForm.value);
  }
  onUpdate(){
  	this.heroService.updateUser(this.editForm.value);
  	// console.log(this.editForm.value);
  }
  onDelete(id){
  	this.heroService.deleteUser(id);
  }

  ngOnInit() {
  }

}
