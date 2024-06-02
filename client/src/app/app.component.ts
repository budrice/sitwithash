import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MastheadComponent } from "./masthead/masthead.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MastheadComponent]
})
export class AppComponent {
  
}
