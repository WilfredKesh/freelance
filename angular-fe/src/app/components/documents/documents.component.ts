import { Component } from '@angular/core';
import { Document} from "./document";

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
    documents: Document[] = [
      {title: "title",
      description: "whfhweqfwbefhbwqdhfbhwqfhqwedh jwedjehde ejedghehdgehdgfeh",
      file_url: 'http://google.com',
      updated_at: '09/08/17',
      image_url: 'http://google.com'
    },
    {title: "title2",
      description: "whfhweqfwbefhbwqdhfbhwqfhqwedh jwedjehde ejedghehdgehdgfeh",
      file_url: 'http://google.com',
      updated_at: '09/08/17',
      image_url: 'http://google.com'
    },
    {title: "title3",
      description: "whfhweqfwbefhbwqdhfbhwqfhqwedh jwedjehde ejedghehdgehdgfeh",
      file_url: 'http://google.com',
      updated_at: '09/08/17',
      image_url: 'http://google.com'
    }
    ]

}