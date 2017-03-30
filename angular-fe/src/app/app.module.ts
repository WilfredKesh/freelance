import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule} from './routing.module';
import {DocumentsComponent} from './components/documents/documents.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, RoutingModule ],
  declarations: [ AppComponent, DocumentsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
