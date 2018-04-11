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
      'numSegments': 4,
      // 'imageOverlay' : true,
      'segments' : [
        {'fillStyle' : '#eae56f', 'text' : 'Prize One'},
        {'fillStyle' : '#89f26e', 'text' : 'Prize Two'},
        {'fillStyle' : '#7de6ef', 'text' : 'Prize Three'},
        {'fillStyle' : '#e7706f', 'text' : 'Prize Four'}
      ],
      'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'spins': 8
      }
    });
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
    console.log('fdsf');
    this.myWheel.startAnimation();
  }
}
