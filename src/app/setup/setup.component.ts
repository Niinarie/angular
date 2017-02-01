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

  searchStops() {
    console.log(this.stop);
    this.router.navigate(['routes', this.stop]);
  }

  constructor(private router: Router) {
    this.router.navigate(['setup']);

   }

  ngOnInit() {
    }

}
