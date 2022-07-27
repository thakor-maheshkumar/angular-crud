import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes:Routes =[
  { path :'',pathMatch:'full', redirectTo:'add-book'},
  { path :'books-list',component:BooksListComponent},
  { path :'add-book',component:AddBookComponent},
  { path :'edit-blog/:id',component:BookDetailComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
