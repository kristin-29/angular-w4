import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css',
})
export class TrafficLightComponent implements OnInit {
  color: string = 'red';
  crossButtonDisabled: boolean = false;

  constructor() {}

  ngOnInit() {
    this.color = 'red';
    if (this.color === 'red)') {
      this.crossButtonDisabled = true;
    } else {
      this.crossButtonDisabled = false;
    }
  }

  clickButton() {
    if (this.color === 'yellow') {
      alert("Be careful!");
    }
  }
}