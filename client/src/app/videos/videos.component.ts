import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements AfterViewInit {
  @ViewChild('videoPlayer', { static: false }) videoPlayer: ElementRef = {} as ElementRef;
  
  dataLoaded = false;
  videoStarted = false;

  ngAfterViewInit() {
    this.videoPlayer.nativeElement.onloadeddata = () => {
      console.log('Video data is loaded.');
      this.dataLoaded = true;
    };

    this.videoPlayer.nativeElement.onplaying = () => {
      console.log('Video is no longer paused.');
      this.videoStarted = true;
    };
  }
}
