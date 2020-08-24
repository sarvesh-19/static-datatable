import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Angular';
  postID;
  /*
  postData = {
    test: 'my content',
  };
  url = 'http://dev.vlinkcare.com/vlink-care/api/user/getAllEMAILTemplates';
  json;
  constructor(private http: HttpClient){
    this.http.post(this.url, this.postData).toPromise().then((data:any) => {
      console.log(data);
      console.log(data.json.test);
      this.json = JSON.stringify(data.json);
    });
  }
  */
 constructor(private http: HttpClient){}
  ngOnInit() {
    this.http.post<Article>('http://dev.vlinkcare.com/vlink-care/api/user/getAllEMAILTemplates', {name: 'Jason'}).subscribe(data =>{
      this.postID = data.id;
    })
    let table = $('#example').DataTable({
      drawCallback: () => {
        $('.paginate_button.next').on('click', () => {
            this.nextButtonClickEvent();
          });
      }
    });
  }
  buttonInRowClick(event: any): void {
    event.stopPropagation();
    console.log('Button in the row clicked.');
  }
  wholeRowClick(): void {
    console.log('Whole row clicked.');
  }
  nextButtonClickEvent(): void {
    console.log('next clicked')
  }
  previousButtonClickEvent(): void {
  }
}

interface Article{
  id: number;
  name: string;
}
/*
export class AppComponent implements OnInit{
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts;
  
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
    });
  
  }
  
}
*/