import { Injectable } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
/*
  Generated class for the SxLocationHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SxLocationHelperProvider {

  constructor(private geolocation: Geolocation) {
    console.log('Hello SxLocationHelperProvider Provider');
  }

  getCurrentPosition(options?: GeolocationOptions) {
    return this.geolocation.getCurrentPosition(options);
  }

}
