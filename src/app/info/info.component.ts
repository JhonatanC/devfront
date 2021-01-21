declare const google: any;
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  data:any = [];

  // lat: number = 51.678418;
  // lng: number = 7.809007;

  lat: number;
  lng: number;

  constructor( public _data: DataService ) {
    this._data.get_data().subscribe( (data:any) =>{
      this.data = data;
      console.log( data[0].location.coordinates[0] );
      console.log( data[0].location.coordinates[1] );

      for(let i = 0; i <= data.length; i++){
        // this.lat = data[0].location.coordinates[0];
        // this.lng = data[0].location.coordinates[1];

        this.lat = data[i].location.coordinates[0];
        this.lng = data[i].location.coordinates[1];
      }
      // this.lat = data['location']['coordinates'][0];
      // this.lng = data['location']['coordinates'][1];
    })
  }

}
