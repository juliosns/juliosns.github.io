import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [40, -80];
const defaultZoom: number = 11;

@Injectable()
export class MapService {

  constructor() { }

  createMap(lat:number = 40, lng:number = -80){
    var map = L.map('map', { zoomControl:false }).setView([lat, lng], defaultZoom);
    map.dragging.disable();
    map.scrollWheelZoom.disable();
    map.maxZoom = 100;
      L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: apiToken
    }).addTo(map);
  }
}