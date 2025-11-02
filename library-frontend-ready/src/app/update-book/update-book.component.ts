import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-book',
  template: `
    <h2>Edit Book</h2>
    <form *ngIf="book" (ngSubmit)="save()" style="display:flex;flex-direction:column;gap:8px;max-width:500px;">
      <input [(ngModel)]="book.title" name="title" />
      <input [(ngModel)]="book.author" name="author" />
      <input type="number" [(ngModel)]="book.year" name="year" />
      <button class="btn btn-primary" type="submit">Save</button>
    </form>
  `
})
export class UpdateBookComponent implements OnInit{
  book:any;
  constructor(private svc: BookService, private route: ActivatedRoute){}
  ngOnInit(){ const id=this.route.snapshot.params['id']; this.svc.getBook(id).subscribe(r=>this.book=r); }
  save(){ this.svc.updateBook(this.book._id,this.book).subscribe(()=>alert('Saved')); }
}
