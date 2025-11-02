import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
  private books = [
    { _id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { _id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { _id: '3', title: '1984', author: 'George Orwell', year: 1949 },
    { _id: '4', title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
    { _id: '5', title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
  ];

  getBooks(): Observable<any[]> {
    return of(this.books);
  }

  addBook(b: any): Observable<any> {
    b._id = (Math.random() * 100000).toFixed(0);
    this.books.push(b);
    return of(b);
  }

  getBook(id: string): Observable<any> {
    return of(this.books.find(x => x._id === id));
  }

  updateBook(id: string, b: any): Observable<any> {
    const i = this.books.findIndex(x => x._id === id);
    if (i !== -1) this.books[i] = b;
    return of(b);
  }

  deleteBook(id: string): Observable<any> {
    this.books = this.books.filter(x => x._id !== id);
    return of(true);
  }

  searchBooks(q: string): Observable<any[]> {
    const query = q.toLowerCase();
    return of(this.books.filter(x => x.title.toLowerCase().includes(query)));
  }
}
