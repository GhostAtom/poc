import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchedTerm = '';

  onSearchSubmit(term: string): void {
    this.searchedTerm = term;
    console.log(term);
  }
}
