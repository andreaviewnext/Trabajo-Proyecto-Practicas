import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uaWV0b3MiLCJhIjoiY2xndnp3N2huMDc3dTNybG5yMno2dnNkdCJ9.MGNvWLtlQ2LdABJV6IOYzQ';

if( !navigator.geolocation){
  alert('Navegador no soporta el Geolocation');
  throw new Error('Navegador no soporta el Geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
