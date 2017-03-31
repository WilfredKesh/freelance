import { Component } from '@angular/core';
import { Proposal} from './proposal';
@Component({
    moduleId: module.id,
    selector: 'proposals',
    templateUrl: 'proposals.component.html'
})

export class ProposalsComponent {
    proposal1: Proposal = new Proposal(15, 'ABC ltd', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'wilfredkesh.com')
    proposal2: Proposal = new Proposal(20, 'NBC ltd', 'http://yahoo.com', 'Ember JS', 150, 120, 15, 'wilfredkesh.com')
    proposal3: Proposal = new Proposal(20, 'CBC ltd', 'http://bling.com', 'Angular JS', 150, 120, 15, 'wilfredkesh.com')
}