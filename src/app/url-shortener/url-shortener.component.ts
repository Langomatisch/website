import {Component, NgModule} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent {

  selected;
  test = '';
  icon = faCopy;

  listUrls: {}[] = [
    {
      date: 'Tue Apr 14 2020 23:11:21 GMT+0200 (Central European Summer Time)',
      _id: '5e9626f9bb8b6f7d0aa2a1f6',
      longUrl: 'https://amazon.com',
      shortUrl: 'http://lango.link/zbySb6ugP',
      urlCode: 'zbySb6ugP'
    },
    {
      date: 'Tue Apr 14 2020 23:15:00 GMT+0200 (Central European Summer Time)',
      _id: '5e9627d4bb8b6f7d0aa2a1f7',
      longUrl: 'http://img.langomatisch.de/putty_OUOPkUVtOW.png',
      shortUrl: 'http://lango.link/Aql7lNzc9',
      urlCode: 'Aql7lNzc9',
    },
    {
      date: 'Tue Apr 14 2020 23:21:18 GMT+0200 (Central European Summer Time)',
      _id: '5e96294ebb8b6f7d0aa2a1fd',
      longUrl: 'https://www.instagram.com/diesermatthew/',
      shortUrl: 'http://lango.link/instagram',
      urlCode: 'instagram',
      __v: 0
    }];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.getListOfUrls().subscribe( value => {
      this.listUrls.push(value);
      console.log(`got ${value}`);
    });
  }


  getListOfUrls(): Observable<{}[]> {
    const header = new HttpHeaders().set('Access-Control-Allow-Origin', '*').set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<{}[]>('http://lango.link/api/url/list', {headers: header});
  }

  refreshSite() {
    console.log('refresh');
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 2000,
    });
  }
}

