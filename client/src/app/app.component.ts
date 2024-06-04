import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MastheadComponent } from "./masthead/masthead.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MastheadComponent, NavbarComponent]
})
export class AppComponent {
  year = new Date().getFullYear();
}
