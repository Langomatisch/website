import {Component, NgModule} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Url} from 'url';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.getListOfUrls().subscribe(value => {
      console.log(`got ${value.length} entries`);
      // update
      this.listUrls = value;
    });
  }

  appComponent = AppComponent.appComponent;
  selected: Url;
  icon = faCopy;

  listLink = 'http://lango.link/api/url/list';
  deleteLink = 'http://lango.link/api/url/delete';
  createLink = 'http://lango.link/api/url/shorten';
  customLink = 'http://lango.link/api/url/custom';
  // link = 'http://localhost/api/url/list';

  listUrls: Url[] = [];

  createCustomUrl;
  createLongUrl;
  lastCustomCreatedUrl: Url;

  getListOfUrls(): Observable<Url[]> {
    return this.http.get<Url[]>(this.listLink);
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 2000,
    });
  }

  deleteUrl(selected: Url) {
    return this.http.get<DeleteResponse>(this.deleteLink, {params: new HttpParams().set('urlCode', selected.urlCode)}).subscribe(value => {
      console.log(value);
      const deletedCount = value.deletedCount;
      this.showSnackbar(`deleted ${deletedCount} entries`);
      this.selected = null;
      const index = this.listUrls.indexOf(selected);
      this.listUrls.splice(index, 1);
    });
  }

  createUrl() {
    console.log(`creating url with customCode ${this.createCustomUrl} and link: ${this.createLongUrl}`);
    return this.http.post<Url>(this.createCustomUrl ? this.customLink : this.createLink, {
      longUrl: this.createLongUrl,
      urlCode: this.createCustomUrl
    }, {responseType: 'json'} ).subscribe(value => {
      this.lastCustomCreatedUrl = value.body;
    });
  }
}

// tslint:disable-next-line:no-empty-interface
interface DeleteResponse {

  deletedCount: number;

}
