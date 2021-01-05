import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { WelcomeScreen1Component } from './welcome-screen-1/welcome-screen-1.component';
import { WelcomeScreen2Component } from './welcome-screen-2/welcome-screen-2.component';
import { WelcomeScreen3Component } from './welcome-screen-3/welcome-screen-3.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    //   { path: '', redirectTo: 'welcome-screen-1' },
    //   { path: 'welcome-screen-1', component: WelcomeScreen1Component },
    //   { path: 'welcome-screen-2', component: WelcomeScreen2Component },
    //   { path: 'welcome-screen-3', component: WelcomeScreen3Component }
    {
        path: '',
        component: WelcomeComponent,
        children: [
            { path: '', redirectTo: 'welcome-screen-1' },
            { path: 'welcome-screen-1', component: WelcomeScreen1Component },
            { path: 'welcome-screen-2', component: WelcomeScreen2Component },
            { path: 'welcome-screen-3', component: WelcomeScreen3Component }
        ]
    }
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class WelcomeRoutingModule { }
