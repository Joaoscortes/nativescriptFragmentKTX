import { Component } from '@angular/core';

import { Page } from '@nativescript/core';

@Component({
    selector: 'ns-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }
}
