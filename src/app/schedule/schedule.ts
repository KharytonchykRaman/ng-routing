import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getRandom } from '../utils/random';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
})
export class Schedule {
  days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  timeSlots = [
    '07:30 - 08:30',
    '08:30 - 09:30',
    '09:30 - 10:30',
    '10:30 - 11:30',
    '11:30 - 12:30',
    '12:30 - 13:30',
    '13:30 - 14:30',
    '14:30 - 15:30',
    '15:30 - 16:30',
  ];

  subjects = [
    'Mathematics',
    'Programming',
    'Physics',
    'History',
    'Web Design',
    'Databases',
    'English',
    'Gym',
  ];

  scheduleGrid: { [key: string]: string } = {};

  ngOnInit() {
    this.generateSchedule();
  }

  generateSchedule() {
    this.days.forEach((day) => {
      this.timeSlots.forEach((time) => {
        if (Math.random() > 0.4) {
          this.scheduleGrid[`${day}-${time}`] = getRandom(this.subjects);
        } else {
          this.scheduleGrid[`${day}-${time}`] = '';
        }
      });
    });
  }
}
