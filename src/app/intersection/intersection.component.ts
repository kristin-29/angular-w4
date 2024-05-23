import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';

@Component({
  selector: 'app-intersection',
  standalone: true,
  imports: [TrafficLightComponent],
  templateUrl: './intersection.component.html',
  styleUrl: './intersection.component.css',
})
export class IntersectionComponent implements AfterViewInit {
  [key: string]: any;
  @ViewChild('north') northLight: TrafficLightComponent | any;
  @ViewChild('south') southLight: TrafficLightComponent | any;
  @ViewChild('east') eastLight: TrafficLightComponent | any;
  @ViewChild('west') westLight: TrafficLightComponent | any;

  ngAfterViewInit() {
    this.startTrafficLightSequence();
  }

  startTrafficLightSequence() {
    this.northLight.color = 'red';
    this.southLight.color = 'red';
    this.eastLight.color = 'green';
    this.westLight.color = 'green';

    setTimeout(() => {
      if (this.accident) {
        return;
      }

      this.northLight.color = 'yellow';
      this.southLight.color = 'yellow';
      this.eastLight.color = 'yellow';
      this.westLight.color = 'yellow';
      setTimeout(() => {
        this.northLight.color = 'green';
        this.southLight.color = 'green';
        this.eastLight.color = 'red';
        this.westLight.color = 'red';
        setTimeout(() => {
          this.northLight.color = 'yellow';
          this.southLight.color = 'yellow';
          this.eastLight.color = 'yellow';
          this.westLight.color = 'yellow';

          setTimeout(() => {
            this.startTrafficLightSequence();
          }, 2000);
        }, 5000);
      }, 2000);
    }, 5000);
  }

  accident = false;

  startAccident() {
    if (this.accident) {
      return;
    }

    this.accident = true;
    let blink = false;

    const intervalId = setInterval(() => {
      blink = !blink;
      const color = blink ? 'yellow' : 'off';

      this.northLight.color = color;
      this.southLight.color = color;
      this.eastLight.color = color;
      this.westLight.color = color;
    }, 500);

    setTimeout(() => {
      clearInterval(intervalId);

      setTimeout(() => {
        this.accident = false;
        this.startTrafficLightSequence();
      }, 10000);
    }, 10000);
  }
}