import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { MembersComponent } from './members/members.component';
import { IssueBookComponent } from './issue-book/issue-book.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'view-books', component: ViewBooksComponent },
  { path: 'update-book/:id', component: UpdateBookComponent },
  { path: 'members', component: MembersComponent },
  { path: 'issue-book', component: IssueBookComponent },
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),

    // Import standalone components
    AppComponent,
    HomeComponent,
    ViewBooksComponent,
    AddBookComponent,
    UpdateBookComponent,
    MembersComponent,
    IssueBookComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
