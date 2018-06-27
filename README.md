# ionic-locate-demo

## 1.get current location coordinates info

Using [Geolocation](https://ionicframework.com/docs/native/geolocation/) plugin to get the coordinates info

## 2.reverse geocode

Using [Native Geocoder](https://ionicframework.com/docs/native/native-geocoder/) plugin to reverse geocode a given latitude and longitude to find location address

## 3.some issue when using [Native Geocoder](https://ionicframework.com/docs/native/native-geocoder/)
You may build ios project failed when you using the [Native Geocoder](https://ionicframework.com/docs/native/native-geocoder/) plugin on the xcode version 9+ condition.

And may got some error info like these below.
> Check dependencies

>The “Swift Language Version” (SWIFT_VERSION) build setting must be set to a supported value for targets which use Swift. This setting can be set in the build settings editor.

> ** BUILD FAILED **


**Solution**

> Just add the `<preference name="UseSwiftLanguageVersion" value="4" />` within the `<platform name="ios">`inside your project's `config.xml`