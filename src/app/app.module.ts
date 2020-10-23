import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapsComponent } from './components/maps/maps.component';


import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/maps/mapa-editar/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapsComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBis-ipSSTcruiYdUziQu3sgWRHvF28rpI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
