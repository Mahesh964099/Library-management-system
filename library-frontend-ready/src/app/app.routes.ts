import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { MembersComponent } from './members/members.component';
import { IssueBookComponent } from './issue-book/issue-book.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-books', component: ViewBooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'update-book/:id', component: UpdateBookComponent },
  { path: 'members', component: MembersComponent },
  { path: 'issue-book', component: IssueBookComponent },
  { path: '**', redirectTo: '' }
];
