import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'app/core/login/login.service';

@Component({
  selector: 'md-login-intranet',
  template: '<p></p>',
  styles: []
})
export class LoginIntranetComponent implements OnInit {
  usucod: string;
  uid: string;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.usucod = queryParams.get('usucod');
      this.uid = queryParams.get('uid');

      if (this.usucod && this.uid) {
        this.loginService
          .login({
            username: this.usucod,
            password: this.uid
          })
          .then(
            () => {
              this.router.navigate(['']);
            },
            () => {
              this.router.navigate(['accessdenied']);
            }
          );
      }
    });
  }
}
