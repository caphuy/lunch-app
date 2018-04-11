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
      'textMargin': 14,
      'textOrientation': 'curved',
      'segments' : [
        {'fillStyle': '#eae56f', 'text': 'Segment 1'},
        {'fillStyle': '#89f26e', 'text': 'Segment 2'},
        {'fillStyle': '#7de6ef', 'text': 'Segment 3'},
        {'fillStyle': '#e7706f', 'text': 'Segment 4'}
      ],
      'lineWidth': 2
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

}
