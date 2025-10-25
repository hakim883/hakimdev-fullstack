import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'Loxi - Angular 17 Digital Agency & Startup Template';

    darkMode = false;

    constructor() {
        this.darkMode = JSON.parse(localStorage.getItem('darkMode')!);
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
    }

}