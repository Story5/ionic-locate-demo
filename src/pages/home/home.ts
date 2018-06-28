import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SxLocationHelperProvider } from '../../providers/sx-location-helper/sx-location-helper';
import { GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
import { NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timestamp : number;
  coordinates: Coordinates;
  locationInfo: Array<any> = [];
  located: boolean = false;

  reversed:boolean = false;
  addressInfo:Array<any> = [];

  constructor(
    public platform:Platform,
    public navCtrl: NavController,
    public sxlocationhelper:SxLocationHelperProvider
  ) {

  }

  startLocate() {
    console.log("startLocate");
    this.located = false;
    this.reversed = false;
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    this.platform.ready().then(()=>{
      let options: GeolocationOptions = {
        enableHighAccuracy: false
      };
      this.sxlocationhelper.getCurrentPosition(options).then((geoposition: Geoposition) => {
        this.timestamp = geoposition.timestamp;
        this.coordinates = geoposition.coords;
        console.log("timestamp:", this.timestamp);
        console.log("coords:", JSON.stringify(this.coordinates));
        

        var array = [];
        for (const key in this.coordinates) {
          const element = this.coordinates[key];
          if (element != null) {
            array.push([key, element]);
          }
        }
        this.locationInfo = array;
        this.located = true;
      }).catch(error => {
        console.error(JSON.stringify(error));
      });
    })
  }

  geocoding() {
    this.reversed = false;
    
    this.sxlocationhelper.reverseGeocode(this.coordinates.latitude, this.coordinates.longitude)
    .then((results: NativeGeocoderReverseResult[]) => {
      let result = results[0];

      
      var array = [];
      for (const key in result) {
        const element = result[key];
        if (element != null) {
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
