import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  Blogs:any=[];
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.GetBlogs().subscribe(res=>{
      console.log(res);
      this.Blogs=res;
    })
  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBlog(id).subscribe((res) => {
        this.Blogs.splice(i, 1);
      })
    }
  }
}
