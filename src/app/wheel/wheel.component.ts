import { AppSettings } from './../AppSettings';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpinService } from './../spin.service';
import { UtilsService } from './../utils.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})

export class WheelComponent implements OnInit {

  private title: String;
  private myWheel: any;
  private onMoveSegment: any;
  private socket;

  @ViewChild('canvas') canvas: ElementRef;

  constructor(private spinService: SpinService, private utilsService: UtilsService) { 
    this.socket = io(AppSettings.SOCKET_ENDPOINT);
    this.socket.on('hello', (data: any) => {
        console.log(data);
    });
  }

  ngOnInit() {
    this.title = 'Wheel';
    this.myWheel = new Winwheel({
      'canvasId': 'canvas',
      'numSegments': 8,
      'outerRadius': 110,
      'textFontSize': 15,
      'pointerAngle': 0,
      'drawText': true,
      'segments': [
        { 'fillStyle': 'rgb(255, 255, 102)', 'text': 'Prize 1', 'textFillStyle': 'rgb(0, 0, 0)' },
        { 'fillStyle': 'rgb(0, 204, 153)', 'text': 'Prize 2', 'textFillStyle': 'rgb(0, 0, 0)' },
        { 'fillStyle': 'rgb(0, 153, 255)', 'text': 'Prize 3', 'textFillStyle': 'rgb(0, 0, 0)' },
        { 'fillStyle': 'rgb(255, 102, 102)', 'text': 'Prize 4', 'textFillStyle': 'rgb(0, 0, 0)' },
        { 'fillStyle': 'rgb(255, 255, 102)', 'text': 'Prize 5', 'textFillStyle': 'rgb(0, 0, 0)' },
        { 'fillStyle': 'rgb(0, 204, 153)', 'text': 'Prize 6', 'textFillStyle': 'rgb(0, 0, 0)' },
        { 'fillStyle': 'rgb(0, 153, 255)', 'text': 'Prize 7', 'textFillStyle': 'rgb(0, 0, 0)' },
        { 'fillStyle': 'rgb(255, 102, 102)', 'text': 'Prize 8', 'textFillStyle': 'rgb(0, 0, 0)' }
      ],
      'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'spins': 8,
        // 'callbackFinished': this.alertPrize.bind(this),
        // 'callbackAfter' : this.drawTriangle.bind(this)
      }
    });
    // this.drawTriangle();
    this.canvas.nativeElement.onclick = (e) => {
      const clickedSegment = this.myWheel.getSegmentAt(e.clientX, e.clientY);
      if (clickedSegment) {
        console.log(clickedSegment);
      }
    };
    this.canvas.nativeElement.onmousemove = (e) => {
      const onMovingSegment = this.myWheel.getSegmentAt(e.clientX, e.clientY);
      if (onMovingSegment !== this.onMoveSegment) {
        this.resetColour();
        this.onMoveSegment = onMovingSegment;
        if (this.onMoveSegment !== null) {
          this.onMoveSegment.fillStyle = this.utilsService.convertRgbToRgbA(this.onMoveSegment.fillStyle, 0.5);
          this.onMoveSegment.textFillStyle = this.utilsService.convertRgbToRgbA(this.onMoveSegment.textFillStyle, 0.5);
          this.myWheel.draw();
        }
      }
    };
  }

  resetColour() {
    if (this.onMoveSegment !== void(0) && this.onMoveSegment !== null) {
      this.onMoveSegment.fillStyle = this.utilsService.convertRgbAToRgb(this.onMoveSegment.fillStyle);
      this.onMoveSegment.textFillStyle = this.utilsService.convertRgbAToRgb(this.onMoveSegment.textFillStyle);
      this.myWheel.draw();
    }
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
    this.spinService.spin().subscribe(data => {
      const stopAt = data.won;
      this.myWheel.animation.stopAngle = stopAt;
      this.myWheel.startAnimation();
    });
  }

  resetSpin() {
    this.resetColour();
    // this.myWheel.stopAnimation(false);
    // this.myWheel.rotationAngle = 0;
    // this.myWheel.draw();
  }

  // alertPrize() {
  //   // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
  //   const winningSegment = this.myWheel.getIndicatedSegment();
  //   // Basic alert of the segment text which is the prize name.
  //   alert('You have won ' + winningSegment.id + '!');
  // }

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
