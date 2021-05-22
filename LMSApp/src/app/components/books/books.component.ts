import { Component, OnInit } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { NgForm } from '@angular/forms';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // create of books service object 
  constructor(public books_service:BooksService) { }

  ngOnInit(): void {
     this.resetForm();
  }

  resetForm(form?:NgForm){
     if(form!=null)
     form.resetForm();
     this.books_service.formData={
       Id:0,
       BookCode:'',
       BookName:'',
       BookCount:0
     }

  }

  OnSubmit(form:NgForm){
    console.log("clicked")
  }

}
