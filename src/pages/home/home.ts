import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SxLocationHelperProvider } from '../../providers/sx-location-helper/sx-location-helper';
import { GeolocationOptions, Geoposition } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  locationInfo:Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public sxlocationhelper:SxLocationHelperProvider
  ) {

  }

  startLocate() {
    console.log("startLocate");
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    let options: GeolocationOptions = {
      enableHighAccuracy : false
    };
    this.sxlocationhelper.getCurrentPosition(options).then((geoposition: Geoposition)=>{
      let timestamp: number = geoposition.timestamp;
      let coords: Coordinates = geoposition.coords;
      console.log("timestamp:", timestamp);
      console.log("coords:", JSON.stringify(coords));

      for (const key in coords) {
        if (coords.hasOwnProperty(key)) {
          const element = coords[key];
          this.locationInfo.push([key,element]);
        }
      }
      
    }).catch(error=>{
      console.error(JSON.stringify(error));
    });
  }

}
