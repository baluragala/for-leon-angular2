import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GithubService {

  constructor(private http:Http) { }

  getUsers(){
      this.http.get('https://api.github.com/users')
      .map(response => response.json())
      .subscribe(users => {
       console.log(users);
      });
  }

   getRepoDetailsByUser(username:string){
      this.http.get(`https://api.github.com/users/${username}`)
      .map(response => response.json().repos_url)
      .mergeMap(repoUrl => this.http.get(repoUrl))
      .mergeMap(repos => this.http.get((repos.json())[0].forks_url))
      .subscribe(details => console.log(details.json()));

      // .subscribe(details => {
      //   this.http.get(details.repos_url)
      //   .map(response => response.json())
      //   .subscribe(repos => console.log(repos))
      // });
  }

  //mojombo , defunkt

  getMutipleUserDetails(user1:string,user2:string,user3:string){
    let api='https://api.github.com/users/';
    let user1$ = this.http.get(`${api}${user1}`).map(r=>r.json());
    let user2$ = this.http.get(`${api}${user2}`).map(r=>r.json());
    let user3$ = this.http.get(`${api}${user3}`).map(r=>r.json());

    Observable.forkJoin([user1$,user2$,user3$])
      .subscribe(responses=>console.log(responses))


  }

}
