import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentUser?: User | null;;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getCurrentUser().then((user) => {
      this.currentUser = user;
      console.log('Usuario actual:', user);
    });
  }

  onlogout() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);

      })
      .catch(error => console.log(error));
  }
}
