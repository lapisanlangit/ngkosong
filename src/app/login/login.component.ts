import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    document.body.className = '"hold-transition login-page';
  }

  /**
   * login
   */
  public login() {
     let link = ['/menu'];
    //  this.router.navigate(link);
    this.router.navigate(['/menu']);
    
  }

                    

}
