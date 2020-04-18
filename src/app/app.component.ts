import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';

  content: any = 'Work in Progess';
  otherSite: boolean = false;

  openSnackbar(message: string) {
  }
}
