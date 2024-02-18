import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShowGymOwnersService {
  constructor() {}

  URL = 'http://localhost:5555/login/owner/';
  httpClient = inject(HttpClient);

  getOwner(id: string) {
    return this.httpClient.get(`${this.URL}${id}`);
  }
}
