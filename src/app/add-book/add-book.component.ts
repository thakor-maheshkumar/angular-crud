import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { FormGroup, FormBuilder  } from '@angular/forms';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(    public formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService:CrudService
    ) 
    {
      this.bookForm=this.formBuilder.group({
        name:[''],
        description:[''],
      })

    }

  ngOnInit(): void {
  }
  onSubmit():any{
    this.crudService.AddBlog(this.bookForm.value)
    .subscribe(()=>{
      console.log('Data Added successfully')
      this.ngZone.run(()=>this.router.navigateByUrl('/books-list'))
    })
  }

}
