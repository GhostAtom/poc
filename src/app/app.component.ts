import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchedTerm = '';

  constructor(private router: Router) {}

  onSearchSubmit(term: string): void {
    this.searchedTerm = term;
    this.router.navigate(['/'], {
      queryParams: { q: this.searchedTerm },
    });
  }
}
