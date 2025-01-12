import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-portfolio',
  imports: [SectionHeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent {
  images: string[] = [
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
    '/images/poert1.png',
    '/images/port2.png',
    '/images/port3.png',
  ];

  imgSrc: string = '';
  currentIndex: number = 0;
  displayPopup: boolean = false;

  showDetails(imgSrc: string, indexImg: number): void {
    this.imgSrc = imgSrc;
    this.displayPopup = true;
    this.currentIndex = indexImg;
  }

  closePopup() {
    this.displayPopup = false;
  }

  preventClose(event: MouseEvent): void {
    event.stopPropagation();
  }

  navigateImage(direction: 'next' | 'prev'): void {
    const totalImages = this.images.length;
    this.currentIndex =
      direction === 'next'
        ? (this.currentIndex + 1) % totalImages
        : (this.currentIndex - 1 + totalImages) % totalImages;

    this.imgSrc = this.images[this.currentIndex];
  }
}
