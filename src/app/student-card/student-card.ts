import { Component, Input } from '@angular/core';
import { Student } from '../students/students';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  @Input({ required: true }) student!: Student;
}
