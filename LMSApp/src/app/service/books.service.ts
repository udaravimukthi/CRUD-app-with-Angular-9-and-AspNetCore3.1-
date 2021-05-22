import { Injectable } from '@angular/core';
import { Books } from '../model/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // Book model type object create
  formData:Books;
  constructor() { }
}
