import { TestBed } from '@angular/core/testing';
import { Http, Response } from '@angular/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})

export class HttpTestComponent implements OnInit {

  private jsonUrl: string = 'tsconfig.json';
  private jsonData: any = {};

  private apiResponse: any;
  private planets: any= [];

  constructor(private http: Http) {}

  private fetchJson(url: string) {
    this.http.get(url).subscribe((res: Response) => {
       const json = res.json();
       this.jsonData = json.compilerOptions;
       console.log(this.jsonData);
    });
   }

   private getApi() {
    this.http.get('http://swapi.co/api/planets').subscribe((res: Response) => {
       this.apiResponse = res.json();
       this.planets = this.apiResponse.results;

       console.log(this.apiResponse);
    });
   }

   

  ngOnInit() {
     this.getApi();
  }

}
