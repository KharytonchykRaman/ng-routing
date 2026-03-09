import { Component, OnInit } from '@angular/core';
import * as Mocks from '../utils/mockData';

export interface User {
  fullName: string,
  email: string,
  group: string,
  phone: string,
  login: string,
  lastSeen: string,
  diamonds: number,
  coins: number,
  avgGrade: number,
  visitPercent: number,
  age: number
}


@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {
  users: User[] = [];

  ngOnInit() {
    this.users = this.generateUsers(10);
  }

  private getRandom<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  generateUsers(count: number):User[] {
    return Array.from({ length: count }, () => ({
      fullName: this.getRandom(Mocks.NAMES),
      email: this.getRandom(Mocks.EMAILS),
      group: this.getRandom(Mocks.GROUPS),
      phone: this.getRandom(Mocks.PHONES),
      login: this.getRandom(Mocks.LOGINS),
      lastSeen: this.getRandom(Mocks.DATES),
      diamonds: Math.floor(Math.random() * 1000),
      coins: Math.floor(Math.random() * 500),
      avgGrade: Number((Math.random() * (12 - 4) + 4).toFixed(1)),
      visitPercent: Math.floor(Math.random() * (100 - 60) + 60),
      age: Math.floor(Math.random() * (40 - 18) + 18)
    }));
  }
}
