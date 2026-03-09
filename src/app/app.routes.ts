import { Routes } from '@angular/router';
import { Students } from './students/students';
import { ErrorComp } from './error-comp/error-comp';
import { News } from './news/news';
import { Schedule } from './schedule/schedule';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: Students },
  { path: 'news', component: News },
  { path: 'schedule', component: Schedule },
  { path: '**', component: ErrorComp },
];
