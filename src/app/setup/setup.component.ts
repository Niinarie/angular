import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  private stop = '';
  private name = '';
  private address = '';
  private number = '';
  private userData: Object = {};
  private fav;

  searchStops() {
    console.log(this.stop);
    this.router.navigate(['routes', this.stop]);
  }

  saveToFavourites(stop: String) {
     localStorage.setItem('favourite', JSON.stringify(stop));
     console.log(localStorage.getItem('favourite'));
   }

   saveInfo(formdata: any) {
     localStorage.setItem('name', formdata.name);
     localStorage.setItem('number', formdata.number);
     localStorage.setItem('address', formdata.address);
   }

   emptyInfo(){
     localStorage.removeItem('name');
     localStorage.removeItem('number');
     localStorage.removeItem('address');
    localStorage.removeItem('favourite');
   }

  constructor(private router: Router) {
    this.router.navigate(['setup']);
   }

  ngOnInit() {
     this.name = localStorage.getItem('name');
    this.address = localStorage.getItem('address');
    this.number = localStorage.getItem('number');
    this.fav = localStorage.getItem('favourite');
    }

}
