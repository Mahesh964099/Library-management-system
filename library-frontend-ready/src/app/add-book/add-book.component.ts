import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Add Book</h2>
    <form (ngSubmit)="add()" style="display:flex;flex-direction:column;gap:8px;max-width:500px;">
      <input placeholder="Title" [(ngModel)]="title" name="title" required />
      <input placeholder="Author" [(ngModel)]="author" name="author" required />
      <input placeholder="Year" type="number" [(ngModel)]="year" name="year" required />
      <div style="display:flex;gap:8px;">
        <button class="btn btn-primary" type="submit">Add</button>
        <button class="btn" type="button" (click)="clear()">Clear</button>
      </div>
    </form>
  `
})
export class AddBookComponent {
  title = '';
  author = '';
  year = 2023;

  constructor(private svc: BookService) {}

  add() {
    this.svc.addBook({ title: this.title, author: this.author, year: this.year })
      .subscribe(() => {
        alert('Book Added Successfully!');
        this.clear();
      });
  }

  clear() {
    this.title = '';
    this.author = '';
    this.year = 2023;
  }
}
