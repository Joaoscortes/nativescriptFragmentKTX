import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeScreen1Component } from './welcome-screen-1/welcome-screen-1.component';
import { WelcomeScreen2Component } from './welcome-screen-2/welcome-screen-2.component';
import { WelcomeScreen3Component } from './welcome-screen-3/welcome-screen-3.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeScreen1Component,
    WelcomeScreen2Component,
    WelcomeScreen3Component
  ],
  imports: [
    WelcomeRoutingModule,
    CommonModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class WelcomeModule {}
