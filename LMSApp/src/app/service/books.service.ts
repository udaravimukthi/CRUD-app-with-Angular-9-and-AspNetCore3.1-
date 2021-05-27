import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Books } from '../model/books.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // Book model type object create
  formData:Books;
  constructor(private http:HttpClient) { }
}
