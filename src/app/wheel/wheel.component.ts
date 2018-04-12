import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})

export class WheelComponent implements OnInit {

  private title: String;
  private myWheel: any;

  constructor() { }

  ngOnInit() {
    this.title = 'Wheel';
    this.myWheel = new Winwheel({
      'canvasId': 'canvas',
      'numSegments': 8,
      'outerRadius': 110,
      'textFontSize': 15,
      'pointerAngle': 90,
      'segments': [
        { 'fillStyle': '#eae56f', 'text': 'Prize 1' },
        { 'fillStyle': '#89f26e', 'text': 'Prize 2' },
        { 'fillStyle': '#7de6ef', 'text': 'Prize 3' },
        { 'fillStyle': '#e7706f', 'text': 'Prize 4' },
        { 'fillStyle': '#eae56f', 'text': 'Prize 5' },
        { 'fillStyle': '#89f26e', 'text': 'Prize 6' },
        { 'fillStyle': '#7de6ef', 'text': 'Prize 7' },
        { 'fillStyle': '#e7706f', 'text': 'Prize 8' }
      ],
      'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'spins': 8,
        'callbackFinished': this.alertPrize.bind(this),
        // 'callbackAfter' : this.drawTriangle.bind(this)
      }
    });
    // this.drawTriangle();
  }

  changeColor() {
    const temp = this.myWheel.segments[1].fillStyle;
    this.myWheel.segments[1].fillStyle = this.myWheel.segments[2].fillStyle;
    this.myWheel.segments[2].fillStyle = this.myWheel.segments[3].fillStyle;
    this.myWheel.segments[3].fillStyle = this.myWheel.segments[4].fillStyle;
    this.myWheel.segments[4].fillStyle = temp;
    this.myWheel.draw();
  }

  addSegment() {
    const date = new Date();
    this.myWheel.addSegment({
      'text': date.getMinutes() + ':' + date.getSeconds(),
      'fillStyle': 'aqua'
    }, 1);
    this.myWheel.draw();
  }

  deleteSegment() {
    this.myWheel.deleteSegment();
    this.myWheel.draw();
  }

  startSpin() {
    this.myWheel.stopAnimation(false);
    this.myWheel.rotationAngle = 0;
    this.myWheel.draw();
    this.myWheel.startAnimation();
  }

  resetSpin() {
    this.myWheel.stopAnimation(false);
    this.myWheel.rotationAngle = 0;
    this.myWheel.draw();
  }

  alertPrize() {
    // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
    const winningSegment = this.myWheel.getIndicatedSegment();
    // Basic alert of the segment text which is the prize name.
    alert('You have won ' + winningSegment.text + '!');
  }

  drawTriangle() {
    // Get the canvas context the wheel uses.
    const ctx = this.myWheel.ctx;
    ctx.strokeStyle = 'navy';     // Set line colour.
    ctx.fillStyle = 'aqua';     // Set fill colour.
    ctx.lineWidth = 2;
    ctx.beginPath();              // Begin path.
    ctx.moveTo(170, 5);           // Move to initial position.
    ctx.lineTo(230, 5);           // Draw lines to make the shape.
    ctx.lineTo(200, 40);
    ctx.lineTo(171, 5);
    ctx.stroke();                 // Complete the path by stroking (draw lines).
    ctx.fill();                   // Then fill.
  }
}
