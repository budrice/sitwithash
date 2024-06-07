import { Component, OnInit, inject } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent implements OnInit {
  private photosService = inject(PhotosService);
  photos?: { id: number, title: string, group: string, image: string }[];
  group = 'walks';
  
  ngOnInit(): void {
    this.photos = this.photosService.getPhotosArray(this.group);
  }

  getPhotos(group: string) {
    this.group = group;
    this.photos = this.photosService.getPhotosArray(group);
  }

}
