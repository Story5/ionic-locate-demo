import { Injectable } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
/*
  Generated class for the SxLocationHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SxLocationHelperProvider {

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {
    console.log('Hello SxLocationHelperProvider Provider');
  }

  getCurrentPosition(options?: GeolocationOptions) {
    return this.geolocation.getCurrentPosition(options);
  }

  // 正向编码(地址转经纬度)
  forwardGeocode(addressString) {
    return this.nativeGeocoder.forwardGeocode(addressString);

  }

  // 反向编码(经纬度转地址)
  reverseGeocode(latitude, longitude) {
    return this.nativeGeocoder.reverseGeocode(latitude, longitude)
  }

}
