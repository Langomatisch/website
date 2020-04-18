import {Component, NgModule} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {ajaxPost} from 'rxjs/internal-compatibility';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent {

  listUrl = 'http://lango.link/api/url/list';
  listUrls: {}[] = [];

  constructor(private httpClient: HttpClient) {
    this.getListOfUrls();
  }

  getListOfUrls() {
    this.httpClient.get<{}[]>(this.listUrl, { headers: new HttpHeaders('Access-Control-Allow-Origin: *')}).subscribe(value => {
      this.listUrls.push(value);
    });
  }
}

