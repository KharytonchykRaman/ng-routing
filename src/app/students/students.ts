import { Component, OnInit } from '@angular/core';
import { dates, emails, groups, imgs, logins, names, phones } from '../utils/mockData';
import { StudentCard } from '../student-card/student-card';
import { getRandom } from '../utils/random';

export interface Student {
  fullName: string;
  email: string;
  group: string;
  phone: string;
  login: string;
  lastSeen: string;
  diamonds: number;
  messages: number;
  achievements: number;
  coins: number;
  avgGrade: number;
  visitPercent: number;
  age: number;
  imgSrc: string;
}

@Component({
  selector: 'app-students',
  imports: [StudentCard],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {
  students: Student[] = [];

  ngOnInit() {
    this.students = this.generateUsers(10);
  }

  generateUsers(count: number): Student[] {
    return Array.from({ length: count }, () => ({
      fullName: getRandom(names),
      email: getRandom(emails),
      group: getRandom(groups),
      phone: getRandom(phones),
      login: getRandom(logins),
      lastSeen: getRandom(dates),
      diamonds: Math.floor(Math.random() * 1000),
      achievements: Math.floor(Math.random() * 10),
      messages: Math.floor(Math.random() * 100),
      coins: Math.floor(Math.random() * 500),
      avgGrade: Number((Math.random() * (12 - 4) + 4).toFixed(1)),
      visitPercent: Math.floor(Math.random() * (100 - 60) + 60),
      age: Math.floor(Math.random() * (40 - 18) + 18),
      imgSrc: getRandom(imgs),
    }));
  }
}
