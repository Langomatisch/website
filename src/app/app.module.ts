import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {UrlShortenerComponent} from './url-shortener/url-shortener.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    UrlShortenerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'urlshortener',
        component: UrlShortenerComponent
      }
    ]),
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    FontAwesomeModule,
    ClipboardModule, MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
