import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>📚 Books</h2>
    <div style="margin-bottom:12px;">
      <input
        placeholder="Search title..."
        [(ngModel)]="q"
        (input)="search()"
        style="padding:6px;width:250px;"
      />
    </div>

    <table border="1" cellpadding="6" cellspacing="0" style="width:100%;border-collapse:collapse;">
      <thead style="background:#f0f0f0;">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let b of books">
          <td>{{ b.title }}</td>
          <td>{{ b.author }}</td>
          <td>{{ b.year }}</td>
          <td>
            <button class="btn btn-primary" (click)="edit(b)">Edit</button>
            <button class="btn btn-danger" (click)="remove(b._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class ViewBooksComponent implements OnInit {
  books: any[] = [];
  q = '';

  constructor(private svc: BookService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getBooks().subscribe(r => this.books = r);
  }

  search() {
    if (!this.q.trim()) this.load();
    else this.svc.searchBooks(this.q).subscribe(r => this.books = r);
  }

  edit(b: any) {
    location.href = '/update-book/' + b._id;
  }

  remove(id: string) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.svc.deleteBook(id).subscribe(() => this.load());
    }
  }
}
