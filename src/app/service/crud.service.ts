import { Injectable } from '@angular/core';
import { Blog } from './Blog';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API:string ='http://localhost:3000/blog';
  httpHeaders = new HttpHeaders().set('Content-type','application-json');
  constructor(private httpClient:HttpClient) { }
  
  AddBlog(data:Blog):Observable<any>{
    let API_URL=`${this.REST_API}/add-blog`;
    console.log(data);
    return this.httpClient
              .post(API_URL,data)
              .pipe(catchError(this.handleError)); 
  }
  GetBlogs(){
    return this.httpClient.get(`${this.REST_API}`);
  }
  GetBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-blog/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }), 
      catchError(this.handleError)
    );
  }
  updateBlog(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-blog/${id}`;
    return this.httpClient
      .put(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  deleteBlog(id:any):Observable<any>{
    let API_URL=`${this.REST_API}/delete-blog/${id}`;
    return this.httpClient
    .delete(API_URL,{headers:this.httpHeaders})
    .pipe(catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
