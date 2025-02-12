import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-teddy',
  templateUrl: './teddy.component.html',
  styleUrls: ['./teddy.component.css']
})
export class TeddyComponent {
  isHugging: boolean = false;
  message: string = '';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  sendHug() {
    this.isHugging = true;
    this.message = 'You just received the warmest hug! ❤️';
    this.createFlowerShower();
    
    setTimeout(() => {
      this.isHugging = false;
    }, 800);
  }

  createFlowerShower() {
    for (let i = 0; i < 20; i++) {
      const flower = this.renderer.createElement('div');
      this.renderer.addClass(flower, 'flower');
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.animationDuration = Math.random() * 3 + 2 + 's';
      this.renderer.appendChild(this.el.nativeElement, flower);

      setTimeout(() => {
        this.renderer.removeChild(this.el.nativeElement, flower);
      }, 4000);
    }
  }
}
