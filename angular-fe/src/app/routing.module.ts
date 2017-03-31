import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import { DocumentsComponent} from './components/documents/documents.component';
import { ProposalsComponent} from './components/proposals/proposals.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
     { path: 'documents', component: DocumentsComponent },
     { path: 'proposals', component: ProposalsComponent }
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule{} 

