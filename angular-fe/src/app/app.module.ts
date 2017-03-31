import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule} from './routing.module';
import { DocumentsComponent} from './components/documents/documents.component';
import { AppComponent }  from './app.component';
import { ProposalsComponent} from './components/proposals/proposals.component';

@NgModule({
  imports:      [ BrowserModule, RoutingModule ],
  declarations: [ AppComponent, DocumentsComponent, ProposalsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
