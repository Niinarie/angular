import { RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DigitransitService } from './../services/digitransit.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  private dataInfo: any;
  private stopInfo: any;
  private positionInfo: Array<Object> = [];

  constructor(private digitransit: DigitransitService, private router: Router, private route: ActivatedRoute) {
    // this.router.navigate(['routes']);
   }

  splicePositions = (positions: Array<Object>) => {

    // check if there are any objects in positions array
    // if there are, splice the array so we only get info for one bus
      if (positions.length > 0) {
      positions.length = 1;
      }
      return positions;
  }

  sortPositions = (positions) => {
          var vehicles: Array<Object> = [];
            Object.keys(positions).forEach(function(id){
              Object.keys(positions[id]).forEach(function(it){

                //make an array out of position info
                var vehicle = positions[id][it];
                vehicles.push(vehicle);
              });
            });
            return vehicles;
  }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) =>
    this.digitransit.getRoutes(params['stop']))
        .subscribe(
          (res) => {
          this.dataInfo = res.data.stops[0].patterns;
          this.stopInfo = res.data.stops[0];

          // go through every route and get location info
          // for each

         for (let i = 0, l = this.dataInfo.length; i < l; i++) {

            this.digitransit.getPosition(this.dataInfo[i].route.gtfsId)
            .subscribe(
            (res) => {
            let positions = this.sortPositions(res);
            positions = this.splicePositions(positions);

            // check if there are any objects in positions array, if there are
            // put the position info to the object
            if (positions.length > 0) {
              this.dataInfo[i].isActive = true;
              this.dataInfo[i].lat = positions[0]['lat'];
              this.dataInfo[i].long = positions[0]['long'];
            } else {
              this.dataInfo[i].isActive = false;
            }
            console.log(this.dataInfo[i].isActive );

            });
          }
        });

  }
}

