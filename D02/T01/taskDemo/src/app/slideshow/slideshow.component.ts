import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  images: string[] = [
    'https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart',
    'https://cdn.mos.cms.futurecdn.net/kBVBVDspTYrHMmWTKBUEFf.jpg',
    'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  ];

  currentSlideIndex: number = 0;
  currentSlide: string = this.images[this.currentSlideIndex];
  slideshowOn: boolean = false;
  slideshowIntervalId: any;

  constructor() { }

  ngOnInit(): void {
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.images.length - 1;
    }
    this.currentSlide = this.images[this.currentSlideIndex];
  }

  nextSlide() {
    if (this.currentSlideIndex < this.images.length - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
    this.currentSlide = this.images[this.currentSlideIndex];
  }

  toggleSlideshow() {
    if (this.slideshowOn) {
      clearInterval(this.slideshowIntervalId);
    } else {
      this.slideshowIntervalId = setInterval(() => {
        this.nextSlide();
      }, 500);
    }
    this.slideshowOn = !this.slideshowOn;
  }

}

