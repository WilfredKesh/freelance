import {NgModule} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import { DocumentsComponent} from './components/documents/documents.component';

const routes: Routes = [
    { path: '',
      redirectTo: '/',
      pathMatch: 'full'

     },
     {
         path: 'documents',
         component: 'DocumentsComponent'
     }
] 

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})

export class RoutingModule {}