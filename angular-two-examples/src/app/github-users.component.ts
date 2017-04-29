import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service'

@Component({
  selector: 'app-github-users',
  template: `
    <p>
      github-users Works!
    </p>
  `,
  styles: []
})
export class GithubUsersComponent implements OnInit {

  constructor(private githubService:GithubService) { }

  ngOnInit() {
    this.githubService.getMutipleUserDetails('baluragala','mojombo','defunkt');
  
  }

}
