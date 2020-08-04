import { AppInitService } from './app-init.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


export function initializeApp1(appInit: AppInitService){
  return() : Promise<any> => {
    return appInit.Init();
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppInitService,
    {
      provide:APP_INITIALIZER,
      useFactory: initializeApp1,
      deps:[AppInitService],
      multi:true
    }
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
