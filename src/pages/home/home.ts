import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SxLocationHelperProvider } from '../../providers/sx-location-helper/sx-location-helper';
import { GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
import { NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coordinates: Coordinates;
  locationInfo: Array<any> = [];
  located: boolean = false;

  reversed:boolean = false;
  addressInfo:Array<any> = [];

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

      this.coordinates = coords;
      var array = [];
      for (const key in coords) {
        if (coords.hasOwnProperty(key)) {
          const element = coords[key];
          array.push([key,element]);
        }
      }
      this.locationInfo = array;
      this.located = true;
    }).catch(error=>{
      console.error(JSON.stringify(error));
    });
  }

  geocoding() {
    this.sxlocationhelper.reverseGeocode(this.coordinates.latitude, this.coordinates.longitude)
    .then((results: NativeGeocoderReverseResult[]) => {
      let result = results[0];

      
      var array = [];
      for (const key in result) {
        if (result.hasOwnProperty(key)) {
          const element = result[key];
          array.push([key, element]);
        }
      }
      this.addressInfo = array;
      this.reversed = true;
      
    }).catch(error => {
      console.error(JSON.stringify(error));
    })
  }

}
