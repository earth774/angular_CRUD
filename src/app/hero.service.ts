import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from './data-model';


let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  constructor(private http:HttpClient) { }

  getUser (): Observable<Account[]> {
  	return this.http.get<Account[]>('http://localhost:3000/data')
  }

  public addUser (hero: any){
  	let data ={
          'branch_name':hero.branch_name,
          'balance': hero.balance,
      }
      console.log(data);
	  return this.http.post('http://localhost:3000/insert',data,httpOptions).subscribe(heroes => {console.log(heroes);
	  	window.location.href='http://localhost:4200/data';
	  });
  	}
    public updateUser (hero: any){
    let data ={
          'account_number':hero.account_number,
          'branch_name':hero.branch_name1,
          'balance': hero.balance1,
      }
      console.log(data);
    return this.http.put('http://localhost:3000/update',data,httpOptions).subscribe(heroes => {console.log(heroes);
      window.location.href='http://localhost:4200/data';
    });
    }

    public deleteUser (id){
    // let data ={
    //       'account_number':id
    //   }
      //console.log(data);
    return this.http.delete('http://localhost:3000/delete/'+id,httpOptions).subscribe(heroes => {console.log(heroes);
      window.location.href='http://localhost:4200/data';
    });
    }
}
