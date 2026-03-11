import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { authors, titles } from '../utils/mockData';
import { getRandom } from '../utils/random';

export interface NewsItem {
  title: string;
  author: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-news',
  imports: [FormsModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News implements OnInit {
  newsList: NewsItem[] = [];

  newTitle: string = '';
  newAuthor: string = '';

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.generateRandomNews();
    }
  }

  generateRandomNews() {
    const randomTitle = getRandom(titles);
    const randomAuthor = getRandom(authors);

    const date = new Date(Number(new Date()) - Math.floor(Math.random() * 10000000000));

    this.newsList.unshift({
      title: randomTitle,
      author: randomAuthor,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString().slice(0, 5),
    });
  }

  addNews() {
    if (!this.newTitle || !this.newAuthor) return;

    const now = new Date();
    const newItem: NewsItem = {
      title: this.newTitle,
      author: this.newAuthor,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString().slice(0, 5),
    };

    this.newsList.unshift(newItem);
    this.newTitle = '';
    this.newAuthor = '';
  }
}
