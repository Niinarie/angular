import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DigitransitService {
    private transitUrl: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';


  constructor(private http: Http) { }

  getRoutes = (stopName: string) => {
    let headers = new Headers({ 'Content-Type': 'application/graphql' });
    let options = new RequestOptions({ headers: headers });

    let data: string = `{
  stops(name: "${stopName}") {
    name
    lat
    lon
    patterns {
      name
      route {
        gtfsId
        shortName
      }
    }
  }
}`;
      return this.http.post(this.transitUrl, data, options)
      .map(resp => resp.json());

   }

    getPosition = (routeName: string) => {
      const re = /(HSL:)(\d\S+)/;
      let route = routeName.match(re);
      //console.log(route[2]);
       return this.http.get('http://api.digitransit.fi/realtime/vehicle-positions/v1/hfp/journey/+/+/'+route[2]+'/')
       .map(resp => resp.json());
     }


}

