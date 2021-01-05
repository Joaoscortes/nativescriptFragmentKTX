import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-welcome-screen-2',
  templateUrl: './welcome-screen-2.component.html',
  styleUrls: ['./welcome-screen-2.component.css']
})
export class WelcomeScreen2Component implements OnInit {

  welcomePage = 2;

  constructor(
    private routerExtensions: RouterExtensions,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // ...
  }

  onNext(screenNumber: number) {
    this.routerExtensions.navigate([`../welcome-screen-${screenNumber}`], {
      relativeTo: this.route
    });
  }

  onBack() {
    this.routerExtensions.back();
  }

}
