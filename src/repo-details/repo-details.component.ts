import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Owner {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Repository {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  topics: string[];
}

interface ApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}
@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss'],
})
export class RepoDetailsComponent{
  @Input() term = '';

  repos: Repository[] = [];

  constructor(private http: HttpClient) {}

  ngOnChanges(): void {
    this.fetchReposData(this.term);
  }

  fetchReposData(searchTerm: string): void {
    if (searchTerm=='')return;
    const url = `https://api.github.com/search/repositories?q=${searchTerm}+in:name&sort=stars&order=desc`;
    this.http.get<ApiResponse>(url).subscribe((response) => {
      this.repos = response.items;
    });
  }
}
