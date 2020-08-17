import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') viewChild: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initCanvas();
  }
  initCanvas(): void {
    const cimg = this.viewChild.nativeElement.getContext('2d');
    cimg.fillStyle = 'green';
    cimg.fillRect(0, 0, 150, 100);
    cimg.clearRect(0, 0);
  }
}
