import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PhotosComponent } from "./photos/photos.component";
import { VideosComponent } from "./videos/videos.component";
import { ActionCallComponent } from "./action-call/action-call.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        NavbarComponent,
        MastheadComponent,
        AboutComponent,
        ServicesComponent,
        PortfolioComponent,
        ContactComponent,
        FooterComponent,
        PhotosComponent,
        VideosComponent,
        ActionCallComponent
    ]
})
export class AppComponent {
  
}
