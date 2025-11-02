import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav style="display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background:#1976d2;color:white">
      <div style="font-weight:bold;font-size:18px;">📚 My Library</div>
      <div>
        <a routerLink="" style="color:white;text-decoration:none;margin:0 10px;">Home</a>
        <a routerLink="view-books" style="color:white;text-decoration:none;margin:0 10px;">Books</a>
        <a routerLink="add-book" style="color:white;text-decoration:none;margin:0 10px;">Add Book</a>
        <a routerLink="members" style="color:white;text-decoration:none;margin:0 10px;">Members</a>
        <a routerLink="issue-book" style="color:white;text-decoration:none;margin:0 10px;">Issue Book</a>
      </div>
    </nav>

    <div class="container" style="padding:20px;">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0078d4;
    color: white;
    padding: 10px 20px;
  }
  nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
  }
  .container {
    padding: 20px;
  }
`]

})
export class AppComponent {
  title = 'Library Management System';
}
